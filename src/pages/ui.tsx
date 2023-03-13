// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import { TPage, TRouter } from './types'
import ChatPage from './ChatPage'
import SignInPage from './SignInPage'
import SignUpPage from './SignUpPage'
import ProfilePage from './ProfilePage'
import Error404Page from './Error404Page'

const pages: TPage[] = [
  {
    path: '/',
    element: ChatPage,
  },
  {
    path: '/sign-in',
    element: SignInPage,
  },
  {
    path: '/sign-up',
    element: SignUpPage,
  },
  {
    path: '/profile',
    element: ProfilePage,
  },
]

const Router = (props: TRouter) => {
  const { currentPath } = props
  const Page = pages.find(({ path }) => path === currentPath)?.element ?? Error404Page

  return Page()
}

export default Router
