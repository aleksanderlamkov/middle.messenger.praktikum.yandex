// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import { TInputControl } from './types'

const InputControl = (props: TInputControl) => {
  const { name, type = 'text', placeholder = '', value = '' } = props

  return (
    <input
      className="input__control"
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  )
}

export default InputControl
