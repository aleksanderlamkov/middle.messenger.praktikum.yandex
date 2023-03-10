import jsxToDOM from 'jsxToDOM'
import { TInput } from './types'
import classNames from '../../utils/classNames'
import './input.pcss'
import InputControl from './components/InputControl'

const Input = (props: TInput) => {
  const {
    className = '',
    name,
    type = 'text',
    placeholder = '',
    value = '',
    label,
    onFocus,
    onBlur,
  } = props

  return (
    <label className={classNames(className, 'input')}>
      {new InputControl({
        name,
        type,
        placeholder,
        value,
        events: {
          focus: onFocus,
          blur: onBlur,
        },
      })}
      {label && (
        <span className="input__label">
          {label}
        </span>
      )}
    </label>
  )
}

export default Input
