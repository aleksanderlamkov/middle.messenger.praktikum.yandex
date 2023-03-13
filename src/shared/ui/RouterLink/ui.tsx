// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import { TRouterLink } from './types'

const RouterLink = (props: TRouterLink) => {
  const { className = '', href, ariaLabel, content } = props

  return (
    <a className={className} href={href} aria-label={ariaLabel}>
      {content}
    </a>
  )
}

export default RouterLink
