// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import authServices from 'shared/services/authServices'
import { removeCookie } from 'shared/utils/cookie'
import UI from './ui'
import { TLogOut } from './types'
import Router from '../../../pages/Router'

class LogOut extends Block<TLogOut> {
  constructor(props: TLogOut) {
    super(UI, {
      ...props,
      onClick: () => this.handleClick(),
    })

    return this.render()
  }

  handleClick = () => {
    authServices.logOut().then(() => removeCookie('isAuth'))
    Router.navigateTo('/')
  }
}

export default LogOut
