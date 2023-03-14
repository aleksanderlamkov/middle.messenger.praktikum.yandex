// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import validateForm from 'shared/utils/validateForm'
import UI from './ui'
import { TUserForm } from './types'

class UserForm extends Block<TUserForm> {
  constructor(props: TUserForm) {
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

    const { target } = event

    const isValid = validateForm(target as HTMLFormElement, this.props.fields)
    console.debug('validateForm:', isValid)

    if (isValid) {
      this.send(target as HTMLFormElement)
    }
  }
}

export default UserForm
