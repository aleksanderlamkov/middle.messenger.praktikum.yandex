// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import UI from './ui'
import { TForm } from './types'

class Form extends Block<TForm> {
  constructor(props: TForm) {
    super(UI, {
      ...props,
    })

    return this.render()
  }
}

export default Form
