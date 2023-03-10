// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import { TInput } from './types'
import classNames from '../../utils/classNames'
import './input.pcss'
import InputControl from './components/InputControl'
import Fragment from '../fragment'

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
      <Fragment>
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
      </Fragment>
      {label && (
        <span className="input__label">
          {label}
        </span>
      )}
    </label>
  )
}

export default Input
