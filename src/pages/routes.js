const routes = {
  '/': 'ChatPage',
  '/chats': 'ChatPage',
  '/sign-in': 'SignInPage',
  '/sign-up': 'SignUpPage',
  '/profile': 'ProfilePage',
  '/unknown-error': 'Error5XXPage',
  '*': 'Error404',
}

const getCurrentPage = () => routes[location.pathname] || routes['*']

const initRouter = (callback) => {
  switch (getCurrentPage()) {
    case 'ChatPage': {
      import('./ChatPage/template.ejs').then(callback)
      break
    }
    case 'SignInPage': {
      import('./SignInPage/template.ejs').then(callback)
      break
    }
    case 'SignUpPage': {
      import('./SignUpPage/template.ejs').then(callback)
      break
    }
    case 'ProfilePage': {
      import('./ProfilePage/template.ejs').then(callback)
      break
    }
    default: {
      import('./Error404Page/template.ejs').then(callback)
      break
    }
  }
}

export { getCurrentPage, initRouter }
export default routes
