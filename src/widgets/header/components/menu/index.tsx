import jsxToDOM from 'jsxToDOM'
import defaultMenuItems from './defaultMenuItems'
import { THeaderMenu } from './types'

const HeaderMenu = (props: THeaderMenu) => {
  const { items = defaultMenuItems } = props

  return (
    <nav className="header__menu">
      <ul className="header__menu-list">
        {items.map(({ href, label }) => (
          <li className="header__menu-item">
            <a
              className="header__menu-link"
              href={href}
              data-js-router-link
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderMenu
