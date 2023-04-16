import { THeaderMenuItem } from './types'

const defaultMenuItems: THeaderMenuItem[] = []

export const authMenuItems: THeaderMenuItem[] = [
  {
    href: '/messenger',
    label: 'Chats',
  },
  {
    href: '/settings',
    label: 'Profile',
  },
]

export const nonAuthMenuItems: THeaderMenuItem[] = [
  {
    href: '/',
    label: 'Sign In',
  },
  {
    href: '/sign-up',
    label: 'Sign Up',
  },
]

export default defaultMenuItems
