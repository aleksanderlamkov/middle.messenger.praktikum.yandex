// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from 'shared/utils/classNames'
import { TRouterLink } from './types'

const RouterLink = (props: TRouterLink) => {
  const { className = '', href, ariaLabel, content, isActive } = props

  return (
    <a
      className={classNames(className, {
        'is-active': isActive,
      })}
      href={href}
      aria-label={ariaLabel}
    >
      {content}
    </a>
  )
}

export default RouterLink
