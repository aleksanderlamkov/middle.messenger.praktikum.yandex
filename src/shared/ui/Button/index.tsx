// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import UI from './ui'
import { TButton } from './types'

class Button extends Block<TButton> {
  constructor(props: TButton) {
    super(UI, {
      ...props,
    })

    return this.render()
  }
}

export default Button
