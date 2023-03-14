// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from 'shared/utils/classNames'
import { TButton } from './types'
import './Button.pcss'

const Button = (props: TButton) => {
  const { className = '', label = 'Click me', type = 'button' } = props

  return (
    <button className={classNames(className, 'button')} type={type}>
      {label}
    </button>
  )
}

export default Button
