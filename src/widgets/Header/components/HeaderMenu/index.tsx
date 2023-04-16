// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import { getCookie } from 'shared/utils/cookie'
import { routerEvents } from 'shared/ui/RouterLink'
import wait from 'shared/utils/wait'
import UI from './ui'
import { THeaderMenu } from './types'
import defaultMenuItems from './defaultMenuItems'

class HeaderMenu extends Block<THeaderMenu> {
  constructor(props: THeaderMenu) {
    super(UI, {
      ...props,
      isAuth: HeaderMenu.isAuth(),
    })

    this.bindEvents()

    return this.render()
  }

  static isAuth() {
    return Boolean(getCookie('isAuth'))
  }

  handlePathChange() {
    wait(300).then(() => {
      this.setProps({ isAuth: HeaderMenu.isAuth() })
    })
  }

  bindEvents() {
    document.addEventListener(routerEvents.pathChange, () =>
      this.handlePathChange()
    )
  }
}

export { defaultMenuItems }
export default HeaderMenu
