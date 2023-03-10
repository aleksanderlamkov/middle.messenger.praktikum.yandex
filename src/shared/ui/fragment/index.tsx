import jsxToDOM from 'jsxToDOM'
import { TFragment } from './types'
import './fragment.pcss'

const Fragment = (props: TFragment) => {
  const {
    children,
  } = props

  return (
    <div
      className="fragment"
    >
      {children}
    </div>
  )
}

export default Fragment
