// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import AvatarUpload from '../../shared/ui/avatar-upload'
import Input from '../../shared/ui/input'
import Button from '../../shared/ui/button'
import './profile-form.pcss'
import { TProfileForm } from './types'
import Fragment from '../../shared/ui/fragment'

const ProfileForm = (props: TProfileForm) => {
  const {
    fields = [],
  } = props

  return (
    <form className="profile-form">
      <Fragment>
        {new AvatarUpload({
          className: 'profile-form__avatar-upload',
          id: 'avatar',
          name: 'avatar',
          buttonLabel: 'Change avatar',
        })}
      </Fragment>
      <fieldset className="profile-form__body">
        {fields.map((field) => (
          <Fragment>
            {new Input({
              className: 'profile-form__input',
              ...field,
            })}
          </Fragment>
        ))}
      </fieldset>
      <footer className="profile-form__actions">
        <Button className="profile-form__submit-button" label="Save" type="submit" />
      </footer>
    </form>
  )
}

export default ProfileForm
