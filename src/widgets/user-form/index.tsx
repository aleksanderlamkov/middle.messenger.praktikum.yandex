import jsxToDOM from 'jsxToDOM'
import Block from '../../shared/utils/generic/block'
import UI from './ui'
import { TUserForm } from './types'
import { validateForm } from '../../shared/utils/validation'

class UserForm extends Block<TUserForm> {
  constructor(props: TUserForm) {
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

    const { target } = event

    const isFormValid = validateForm(target, this.props.fields)
    console.debug('isFormValid:', isFormValid)

    if (isFormValid) {
      this.send(target)
    }
  }
}

export default UserForm
