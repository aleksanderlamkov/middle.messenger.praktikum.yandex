// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import Input from 'shared/ui/Input'
import UI from './ui'
import { TChatForm } from './types'

class ChatForm extends Block<TChatForm> {
  constructor(props: TChatForm) {
    super(UI, {
      ...props,
      events: {
        submit: (event: SubmitEvent) => this.handleSubmit(event),
      },
    })

    return this.render()
  }

  send(formNode: HTMLFormElement) {
    const messageInputNode = formNode.message
    const message = messageInputNode.value.trim()
    if (!message.length) return

    this.props.onSendMessage(message)
    messageInputNode.value = ''
    Input.manageValidation(messageInputNode)
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault()
    this.send(event.target as HTMLFormElement)
  }
}

export default ChatForm
