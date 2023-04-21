// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from 'shared/utils/classNames'
import Logo from 'shared/ui/Logo'
import Fragment from 'shared/ui/Fragment'
import HeaderMenu from './components/HeaderMenu'
import { THeader } from './types'
import './Header.pcss'

const Header = (props: THeader) => {
  const { className } = props

  return (
    <header className={classNames(className, 'header')}>
      <div className="header__inner container">
        <Logo className="header__logo" />
        <Fragment>{new HeaderMenu({})}</Fragment>
      </div>
    </header>
  )
}

export default Header
