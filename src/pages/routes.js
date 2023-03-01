const routes = {
  '/': 'ChatPage',
  '/sign-in': 'SignInPage',
  '*': 'Error404',
}

const getCurrentPage = () => routes[location.pathname] || routes['*']

export { getCurrentPage }
export default routes
