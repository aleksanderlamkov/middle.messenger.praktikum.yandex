// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from 'shared/utils/classNames'
import Fragment from 'shared/ui/Fragment'
import RouterLink from 'shared/ui/RouterLink'
import logoImgSrc from 'assets/images/logo.svg'
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
    <Fragment>
      {
        new RouterLink({
          className: classNames(className, 'logo'),
          href,
          ariaLabel,
          content: (
            <img
              className="logo__image"
              src={logoImgSrc}
              alt={title}
              title={title}
            />
          ),
        })
      }
    </Fragment>
  )
}

export default Logo
