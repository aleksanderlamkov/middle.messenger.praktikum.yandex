// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import AvatarUpload from 'shared/ui/AvatarUpload'
import Input from 'shared/ui/Input'
import Button from 'shared/ui/Button'
import Fragment from 'shared/ui/Fragment'
import { TProfileForm } from './types'
import './ProfileForm.pcss'

const ProfileForm = (props: TProfileForm) => {
  const { fields = [] } = props

  return (
    <form className="profile-form">
      <Fragment>
        {
          new AvatarUpload({
            className: 'profile-form__avatar-upload',
            id: 'avatar',
            name: 'avatar',
            buttonLabel: 'Change avatar',
          })
        }
      </Fragment>
      <fieldset className="profile-form__body">
        {fields.map((field) => (
          <Fragment>
            {
              new Input({
                className: 'profile-form__input',
                ...field,
              })
            }
          </Fragment>
        ))}
      </fieldset>
      <footer className="profile-form__actions">
        <Button
          className="profile-form__submit-button"
          label="Save"
          type="submit"
        />
      </footer>
    </form>
  )
}

export default ProfileForm
