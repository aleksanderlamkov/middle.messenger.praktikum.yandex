// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from 'shared/ui/Fragment'
import RouterLink from 'shared/ui/RouterLink'
import defaultMenuItems, {
  authMenuItems,
  nonAuthMenuItems,
} from './defaultMenuItems'
import { THeaderMenu } from './types'
import LogOut from '../../../../features/user/LogOut'

const HeaderMenu = (props: THeaderMenu) => {
  const { items = defaultMenuItems, isAuth } = props
  const itemsFormatted = [...items]

  if (isAuth) {
    itemsFormatted.push(...authMenuItems)
  } else {
    itemsFormatted.push(...nonAuthMenuItems)
  }

  return (
    <nav className="header__menu">
      <ul className="header__menu-list">
        {itemsFormatted.map(({ href, label }) => (
          <li className="header__menu-item">
            <Fragment>
              {
                new RouterLink({
                  className: 'header__menu-link',
                  href,
                  content: label,
                })
              }
            </Fragment>
          </li>
        ))}
        {isAuth && (
          <li className="header__menu-item">
            <Fragment>{new LogOut({})}</Fragment>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default HeaderMenu
