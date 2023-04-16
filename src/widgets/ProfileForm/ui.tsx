// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import AvatarUpload from 'shared/ui/AvatarUpload'
import Input from 'shared/ui/Input'
import Button from 'shared/ui/Button/ui'
import SavePasswordButton from 'shared/ui/Button'
import Fragment from 'shared/ui/Fragment'
import usersServices from 'shared/services/usersServices'
import { TProfileForm } from './types'
import './ProfileForm.pcss'

const ProfileForm = (props: TProfileForm) => {
  const {
    avatarImgSrc,
    fields = [],
    passwordFields = [],
    onSavePasswordButtonClick,
  } = props

  return (
    <Fragment>
      <form className="profile-form">
        <Fragment>
          {
            new AvatarUpload({
              className: 'profile-form__avatar-upload',
              id: 'avatar',
              name: 'avatar',
              buttonLabel: 'Change avatar',
              imgSrc: avatarImgSrc,
              onAfterUpload: usersServices.changeAvatar,
            })
          }
        </Fragment>
        <fieldset className="profile-form__passwords">
          {passwordFields.map((field) => (
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
          <Fragment>
            {
              new SavePasswordButton({
                className: 'profile-form__submit-button',
                label: 'Save password',
                events: {
                  click: onSavePasswordButtonClick,
                },
              })
            }
          </Fragment>
        </footer>
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
            label="Save info"
            type="submit"
          />
        </footer>
      </form>
    </Fragment>
  )
}

export default ProfileForm
