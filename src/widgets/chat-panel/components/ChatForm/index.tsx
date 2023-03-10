import jsxToDOM from 'jsxToDOM'
import Block from '../../../../shared/utils/generic/block'
import UI from './ui'
import { TChatForm } from './types'

class ChatForm extends Block<TChatForm> {
  constructor(props: TChatForm) {
    super(UI, {
      ...props,
      events: {
        submit: (event) => this.handleSubmit(event)
      }
    })

    return this.render()
  }

  send(formNode) {
    const formData = new FormData(formNode)
    const formDataFormatted = Object.fromEntries([...formData])

    console.debug('formDataFormatted:', formDataFormatted)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.send(event.target)
  }
}

export default ChatForm
