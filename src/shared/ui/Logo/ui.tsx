// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from '../../utils/classNames'
import { TLogo } from './types'
import './Logo.pcss'

const Logo = (props: TLogo) => {
  const {
    className = '',
    href = '/',
    title = 'Home page',
    ariaLabel = 'Home page',
  } = props

  return (
    <a
      className={classNames(className, 'Logo')}
      href={href}
      aria-label={ariaLabel}
    >
      <img
        className="logo__image"
        src="/images/logo.svg"
        alt={title}
        title={title}
      />
    </a>
  )
}

export default Logo
