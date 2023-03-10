import jsxToDOM from 'jsxToDOM'
import EventBus from './eventBus'
import cloneAttributes from '../cloneAttributes'

type FC<TComponentProps> = (props: TComponentProps) => HTMLElement

class Block<TComponentProps> {
  private static EVENTS: Record<string, string> = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  }

  protected component: FC<TComponentProps>
  protected _key: string | null = null
  protected props: TComponentProps
  protected eventBus: EventBus

  constructor(Component: FC<TComponentProps>, props: TComponentProps) {
    this.component = Component
    this.props = this.getProxyProps(props)
    this.eventBus = new EventBus()
    this.registerLifecycle()
  }

  private set key(key) {
    if (this._key) {
      return
    }

    this._key = key
  }

  private get key() {
    return this._key
  }

  private registerLifecycle(): void {
    this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    this.eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    this.eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    this.eventBus.on(Block.EVENTS.FLOW_RENDER, this.render.bind(this))
  }

  private getProxyProps(props) {
    return new Proxy(props, {
      get: (target, prop) => {
        return target[prop]
      },
      set: (target, prop, value) => {
        const oldProp = target[prop]

        target[prop] = value
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProp, target[prop])

        return true
      },
      deleteProperty: () => {
        throw new Error('Нет доступа')
      },
    })
  }

  init(): void {
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  _componentDidMount(): void {
    this.componentDidMount()
  }

  componentDidMount(): void {}

  _componentDidUpdate(oldProp, newProp): void {
    const shouldUpdate = this.componentDidUpdate(oldProp, newProp)

    if (shouldUpdate) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  componentDidUpdate(oldProp, newProp): boolean {
    return oldProp !== newProp
  }

  dispatchComponentDidMount(): void {}

  setProps(nextProps: Partial<TComponentProps>) {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  private addEvents(Component) {
    // @ts-ignore
    const { events = {} } = this.props

    Object.keys(events).forEach((eventName) => {
      Component.addEventListener(eventName, events[eventName])
    })
  }

  private removeEvents(Component) {
    // @ts-ignore
    const { events = {} } = this.props

    Object.keys(events).forEach((eventName) => {
      Component.removeEventListener(eventName, events[eventName])
    })
  }

  get oldNode(): HTMLElement {
    return document.querySelector(`[data-key="${this.key}"]`)!
  }

  render() {
    const Component = this.component
    const ComponentWithProps = <Component {...this.props}/>
    const isMounting = !Boolean(this.key)

    if (isMounting) {
      this.addEvents(ComponentWithProps)
      this.key = ComponentWithProps.dataset.key
    } else {
      const oldNode = this.oldNode
      if (oldNode) {
        oldNode.innerHTML = ComponentWithProps.innerHTML
        cloneAttributes(oldNode, ComponentWithProps, ['data-key'])
      }
    }

    return ComponentWithProps
  }
}

export default Block
