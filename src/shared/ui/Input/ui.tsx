// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from 'shared/utils/classNames'
import Fragment from 'shared/ui/Fragment'
import InputControl from './components/InputControl'
import { TInput } from './types'
import './Input.pcss'

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
        {
          new InputControl({
            name,
            type,
            placeholder,
            value,
            events: {
              focus: onFocus,
              blur: onBlur,
            },
          })
        }
      </Fragment>
      {label && <span className="input__label">{label}</span>}
    </label>
  )
}

export default Input
