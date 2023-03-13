// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import UI from './ui'
import { TInputControl } from './types'

class InputControl extends Block<TInputControl> {
  constructor(props: TInputControl) {
    super(UI, props)

    return this.render()
  }
}

export default InputControl
