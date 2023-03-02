import { bubble } from '../shared/utils/bubble'

const routes = {
  '/': 'ChatPage',
  '/chats': 'ChatPage',
  '/sign-in': 'SignInPage',
  '/sign-up': 'SignUpPage',
  '/profile': 'ProfilePage',
  '/unknown-error': 'Error5XXPage',
  '*': 'Error404',
}

const routerEvents = {
  changeState: 'router::changeState'
}

class Routes {
  els = {
    link: '[data-js-router-link]',
  }

  constructor(renderCallback) {
    this.bindEvents()
    this.renderCallback = renderCallback
  }

  static navigate(href) {
    history.pushState(null, null, href)
  }

  static get currentRoute() {
    return routes[location.pathname] || routes['*']
  }

  renderRoute() {
    switch (Routes.currentRoute) {
      case 'ChatPage': {
        import('./ChatPage/template.ejs').then(this.renderCallback)
        break
      }
      case 'SignInPage': {
        import('./SignInPage/template.ejs').then(this.renderCallback)
        break
      }
      case 'SignUpPage': {
        import('./SignUpPage/template.ejs').then(this.renderCallback)
        break
      }
      case 'ProfilePage': {
        import('./ProfilePage/template.ejs').then(this.renderCallback)
        break
      }
      default: {
        import('./Error404Page/template.ejs').then(this.renderCallback)
        break
      }
    }
  }

  manageHistory(routerLinkNode, hasRender = true) {
    const { href } = routerLinkNode

    Routes.navigate(href)
    bubble(document, routerEvents.changeState, href)
    if (hasRender) {
      this.renderRoute()
    }
  }

  handleClick(event) {
    const { target } = event
    const routerLinkNode = target.closest(this.els.link)

    if (routerLinkNode) {
      event.preventDefault()
      this.manageHistory(routerLinkNode)
    }
  }

  handlePopState() {
    this.renderRoute()
  }

  bindEvents() {
    document.addEventListener('click', (event) => this.handleClick(event))
    window.addEventListener('popstate', () => this.handlePopState())
  }
}

export { routes, routerEvents }
export default Routes
