// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from '../../shared/utils/classNames'
import Logo from '../../shared/ui/logo'
import HeaderMenu from './components/menu'
import { THeader } from './types'
import './header.pcss'

const Header = (props: THeader) => {
  const { className } = props

  return (
    <header className={classNames(className, 'header')}>
      <div className="header__inner container">
        <Logo className="header__logo" />
        <HeaderMenu />
      </div>
    </header>
  )
}

export default Header
