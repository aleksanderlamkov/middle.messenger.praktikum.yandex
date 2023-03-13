// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
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

  send = (formNode: HTMLFormElement) => {
    const formData = new FormData(formNode)
    const formDataFormatted = Object.fromEntries([...formData])

    console.debug('formDataFormatted:', formDataFormatted)
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault()
    this.send(event.target as HTMLFormElement)
  }
}

export default ChatForm
