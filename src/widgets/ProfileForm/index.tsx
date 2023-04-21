// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import validateForm from 'shared/utils/validateForm'
import { TInput } from 'shared/ui/Input/types'
import authServices from 'shared/services/authServices'
import usersServices from 'shared/services/usersServices'
import { TUser } from 'shared/types/user'
import { TProfileForm } from './types'
import UI from './ui'

class ProfileForm extends Block<TProfileForm> {
  constructor(props: TProfileForm) {
    super(UI, {
      ...props,
      onSavePasswordButtonClick: (event: Event) =>
        this.handleSavePasswordButtonClick(event),
      events: {
        submit: (event: SubmitEvent) => this.handleSubmit(event),
      },
    })

    this.updateFields()
    return this.render()
  }

  updateFields() {
    const { fields } = this.props

    authServices.getUserInfo().then((response) => {
      const updatedFields = (fields as TInput[]).map((field) => {
        const { name } = field
        const newValue = response[name as keyof TUser] || ''

        return {
          ...field,
          value: newValue,
        }
      }) as TInput[]

      const avatarImgSrc = `https://ya-praktikum.tech/api/v2/resources/${
        response.avatar as string
      }`

      this.setProps({ fields: updatedFields, avatarImgSrc })
    })
  }

  send = (formNode: HTMLFormElement) => {
    usersServices
      .update({
        first_name: formNode.first_name.value,
        second_name: formNode.second_name.value,
        display_name: formNode.display_name.value,
        login: formNode.login.value,
        email: formNode.email.value,
        phone: formNode.phone.value,
      })
      .then((response) => {
        if (response) {
          const { reason } = response as any

          if (reason) {
            alert(reason)
            return
          }
        }

        alert('Profile data has been successfully changed')
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

  handleSavePasswordButtonClick(event: Event) {
    // @ts-ignore
    const formNode = event.target.form
    const { oldPassword: oldPasswordNode, newPassword: newPasswordNode } =
      formNode
    const { value: oldPassword } = oldPasswordNode
    const { value: newPassword } = newPasswordNode

    usersServices
      .changePassword({ oldPassword, newPassword })
      .then((response) => {
        if (response) {
          const { reason } = response as any

          if (reason) {
            alert(reason)
            return
          }
        }

        alert('The password has been successfully changed')
        this.setProps({
          passwordFields: this.props.passwordFields.map((field: TInput) => ({
            ...field,
            value: '',
          })),
        })
      })
      .catch(alert)
  }
}

export default ProfileForm
