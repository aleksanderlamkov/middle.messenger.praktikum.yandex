// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import { TForm } from './types'

const Form = (props: TForm) => {
  const { className = '', content } = props

  return <form className={className}>{content}</form>
}

export default Form
