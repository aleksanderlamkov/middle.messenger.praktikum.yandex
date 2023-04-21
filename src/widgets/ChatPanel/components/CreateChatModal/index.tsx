// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import UI from './ui'
import { TCreateChatModal } from './types'

class CreateChatModal extends Block<TCreateChatModal> {
  constructor(props: TCreateChatModal) {
    super(UI, props)

    return this.render()
  }
}

export default CreateChatModal
