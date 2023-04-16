import { TRoute } from './types'
import SignInPage from '../SignInPage'
import SignUpPage from '../SignUpPage'
import ChatPage from '../ChatPage'
import SettingsPage from '../SettingsPage'

const routes: TRoute[] = [
  {
    path: '/',
    element: SignInPage,
  },
  {
    path: '/sign-up',
    element: SignUpPage,
  },
  {
    path: '/messenger',
    element: ChatPage,
  },
  {
    path: '/settings',
    element: SettingsPage,
  },
]

export default routes
