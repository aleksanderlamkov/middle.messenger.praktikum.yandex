import jsxToDOM from 'jsxToDOM'
import { TLogo } from './types'
import classNames from '../../utils/classNames'
import './logo.pcss'

const Logo = (props: TLogo) => {
  const {
    className = '',
    href = '/',
    title = 'Home page',
    ariaLabel = 'Home page',
  } = props

  return (
    <a
      className={classNames(className, 'logo')}
      href={href}
      aria-label={ariaLabel}
      data-js-router-link
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
