// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import bubble from 'shared/utils/bubble'
import UI from './ui'
import { TRouterLink } from './types'

export const routerEvents = {
  pathChange: 'router::pathChange',
}

class RouterLink extends Block<TRouterLink> {
  constructor(props: TRouterLink) {
    super(UI, {
      ...props,
      isActive: location.pathname === props.href,
      events: {
        click: (event: Event) => this.handleClick(event),
      },
    })

    this.bindEvents()

    return this.render()
  }

  handleClick = (event: Event) => {
    event.preventDefault()

    const { href } = event.currentTarget as HTMLLinkElement

    history.pushState(null, '', href)
    bubble(routerEvents.pathChange, { href })
  }

  handlePathChange(event: any) {
    const { pathname } = new URL(event.detail.href)

    this.setProps({ isActive: pathname === this.props.href })
  }

  bindEvents() {
    document.addEventListener(routerEvents.pathChange, (event) => {
      this.handlePathChange(event)
    })
  }
}

export default RouterLink
