// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import cloneAttributes from 'shared/utils/cloneAttributes'
import EventBus from './eventBus'

type FC<TComponentProps> = (props: TComponentProps) => JSX.Element
type TProps = Record<string, any>

class Block<TComponentProps> {
  private static EVENTS: Record<string, string> = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  }

  protected component: FC<TComponentProps>

  protected componentWithProps: Element

  protected _key: string | null = null

  protected props: TProps

  protected eventBus: EventBus

  constructor(Component: FC<TComponentProps>, props: TProps) {
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

  private getProxyProps(props: TProps) {
    return new Proxy(props, {
      get: (target, prop: string) => {
        return target[prop]
      },
      set: (target, prop: string, value) => {
        const oldProp = target[prop]

        target[prop] = value // eslint-disable-line no-param-reassign
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

  _componentDidMount = (): void => {
    this.componentDidMount()
  }

  componentDidMount = (): void => {}

  _componentDidUpdate(oldProp: any, newProp: any): void {
    const shouldUpdate = this.componentDidUpdate(oldProp, newProp)

    if (shouldUpdate) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  componentDidUpdate = (oldProp: any, newProp: any): boolean => {
    return oldProp !== newProp
  }

  dispatchComponentDidMount = (): void => {}

  setProps(nextProps: Partial<TComponentProps>) {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  private manageEvents(isAdd = true) {
    const { events = {} } = this.props

    Object.keys(events).forEach((eventName) => {
      const eventFunction = events[eventName]

      if (isAdd) {
        this.componentWithProps.addEventListener(eventName, eventFunction)
      } else {
        this.componentWithProps.removeEventListener(eventName, eventFunction)
      }
    })
  }

  private addEvents() {
    this.manageEvents()
  }

  private removeEvents() {
    this.manageEvents(false)
  }

  get oldNode(): HTMLElement {
    return document.querySelector(`[data-key="${this.key}"]`)!
  }

  render(): any {
    const isMounting = !this.key
    const Component = this.component

    const ComponentWithProps = (
      // @ts-ignore
      <Component {...this.props} />
    ) as unknown as HTMLElement

    this.componentWithProps = ComponentWithProps

    if (isMounting) {
      this.addEvents()
      this.key = ComponentWithProps.dataset.key as string
    } else {
      const { oldNode } = this
      if (oldNode) {
        const hasChildren = oldNode.children.length > 0
        cloneAttributes(oldNode, ComponentWithProps, ['data-key'])
        if (hasChildren) {
          oldNode.innerHTML = ''
          oldNode.append(ComponentWithProps)
        } else {
          oldNode.innerHTML = ComponentWithProps.innerHTML
        }
      } else {
        this.removeEvents()
      }
    }

    return ComponentWithProps
  }
}

export default Block
