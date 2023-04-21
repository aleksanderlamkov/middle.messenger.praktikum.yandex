// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import UI from './ui'
import { TChatMessages } from './types'

class ChatMessages extends Block<TChatMessages> {
  constructor(props: Partial<TChatMessages>) {
    super(UI, {
      ...props,
    })

    return this.render()
  }
}

export default ChatMessages
