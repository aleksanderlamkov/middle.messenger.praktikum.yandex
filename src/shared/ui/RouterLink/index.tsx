// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from '../../utils/generic/block'
import bubble from '../../utils/bubble'
import UI from './ui'
import { TRouterLink } from './types'

export const routerEvents = {
  pathChange: 'router::pathChange'
}

class RouterLink extends Block<TRouterLink> {
  constructor(props: TRouterLink) {
    super(UI, {
      ...props,
      events: {
        click: (event: Event) => this.handleClick(event),
      },
    })

    return this.render()
  }

  handleClick(event: Event) {
    event.preventDefault()

    const { href } = event.currentTarget as HTMLLinkElement

    history.pushState(null, '', href)
    bubble(document.documentElement, routerEvents.pathChange, { href })
  }
}

export default RouterLink
