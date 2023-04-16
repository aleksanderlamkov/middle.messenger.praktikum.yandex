// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from 'shared/utils/classNames'
import { TButton } from './types'
import './Button.pcss'

const Button = (props: TButton) => {
  const { className = '', label = 'Click me', content, type = 'button' } = props

  return (
    <button
      className={classNames(className, 'button', {
        'has-content': Boolean(content),
      })}
      type={type}
      // @ts-ignore
      ariaLabel={content ? label : undefined}
    >
      {content || label}
    </button>
  )
}

export default Button
