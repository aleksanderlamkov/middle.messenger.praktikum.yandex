// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import { routerEvents } from 'shared/ui/RouterLink'
import bubble from 'shared/utils/bubble'
import UI from './ui'
import { TRouter } from './types'

class Router extends Block<TRouter> {
  constructor(props: TRouter) {
    super(UI, {
      ...props,
      currentPath: location.pathname,
    })

    this.bindEvents()

    return this.render()
  }

  manageUrl(href = location.href) {
    const { pathname } = new URL(href)

    this.setProps({ currentPath: pathname })
  }

  static navigateTo(href: string) {
    history.pushState({}, '', href)
    bubble(routerEvents.pathChange, { href })
  }

  handlePathChange() {
    this.manageUrl()
  }

  handlePopStateChange() {
    this.manageUrl()
  }

  bindEvents() {
    document.addEventListener(routerEvents.pathChange, () =>
      this.handlePathChange()
    )
    window.addEventListener('popstate', () => this.handlePopStateChange())
  }
}

export default Router
