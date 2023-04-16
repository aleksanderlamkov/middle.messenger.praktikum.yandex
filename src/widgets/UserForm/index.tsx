// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import validateForm from 'shared/utils/validateForm'
import UI from './ui'
import { TUserForm } from './types'

const defaultProps: Partial<TUserForm> = {
  excludeFields: ['password_repeat'],
}

class UserForm extends Block<TUserForm> {
  constructor(props: TUserForm) {
    super(UI, {
      ...defaultProps,
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
    const { excludeFields = [], fetchFn, onSuccess } = this.props as TUserForm

    excludeFields.forEach(
      (fieldName: string) => delete formDataFormatted[fieldName]
    )

    // @ts-ignore
    fetchFn(formDataFormatted)
      .then((response) => {
        if (response) {
          const { reason } = response as any
          if (reason) {
            alert(reason)
            return
          }
        }

        onSuccess(response)
      })
      .catch(alert)
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault()

    const { target } = event

    const isValid = validateForm(target as HTMLFormElement, this.props.fields)

    if (isValid) {
      this.send(target as HTMLFormElement)
    }
  }
}

export default UserForm
