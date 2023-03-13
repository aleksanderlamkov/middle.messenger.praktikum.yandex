// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from '../../utils/classNames'
import { TLogo } from './types'
import './Logo.pcss'
import Fragment from '../Fragment'
import RouterLink from '../RouterLink'

const Logo = (props: TLogo) => {
  const {
    className = '',
    href = '/',
    title = 'Home page',
    ariaLabel = 'Home page',
  } = props

  return (
    <Fragment>
      {new RouterLink({
        className: classNames(className, 'logo'),
        href,
        ariaLabel,
        content: (
          <img
            className="logo__image"
            src="/images/logo.svg"
            alt={title}
            title={title}
          />
        )
      })}
    </Fragment>
  )
}

export default Logo
