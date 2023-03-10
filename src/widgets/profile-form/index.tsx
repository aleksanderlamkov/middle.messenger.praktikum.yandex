// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from '../../shared/utils/generic/block'
import UI from './ui'
import { TProfileForm } from './types'
import { validateForm } from '../../shared/utils/validation'

class ProfileForm extends Block<TProfileForm> {
  constructor(props: TProfileForm) {
    super(UI, {
      ...props,
      events: {
        submit: (event: SubmitEvent) => this.handleSubmit(event),
      },
    })

    return this.render()
  }

  send(formNode: HTMLFormElement) {
    const formData = new FormData(formNode)
    const formDataFormatted = Object.fromEntries([...formData])

    console.debug('formDataFormatted:', formDataFormatted)
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault()

    const { target } = event

    const isFormValid = validateForm(target as HTMLFormElement, this.props.fields)
    console.debug('isFormValid:', isFormValid)

    if (isFormValid) {
      this.send(target as HTMLFormElement)
    }
  }
}

export default ProfileForm
