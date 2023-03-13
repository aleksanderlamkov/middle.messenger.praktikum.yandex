// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import UI from './ui'
import { routerEvents } from 'shared/ui/RouterLink'
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

  handlePathChange(event: any) {
    const { pathname } = new URL(event.detail.href)

    this.setProps({ currentPath: pathname })
  }

  bindEvents() {
    document.addEventListener(routerEvents.pathChange, (event) => {
      this.handlePathChange(event)
    })
  }
}

export default Router
