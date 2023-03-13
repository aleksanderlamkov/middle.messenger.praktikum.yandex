// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Input from 'shared/ui/Input'
import Button from 'shared/ui/Button'
import { TUserForm } from './types'
import './UserForm.pcss'
import Fragment from 'shared/ui/Fragment'

const UserForm = (props: TUserForm) => {
  const {
    fields = [],
    submitButtonLabel = 'Sign In',
    linkHref = '/',
    linkLabel = 'Sign Up',
  } = props

  return (
    <form className="user-form">
      <fieldset className="user-form__group">
        {fields.map((field) => (
          <Fragment>
            {
              new Input({
                className: 'user-form__input',
                ...field,
              })
            }
          </Fragment>
        ))}
      </fieldset>
      <fieldset className="user-form__group">
        <Button label={submitButtonLabel} type="submit" />
        <a className="user-form__link" href={linkHref}>
          {linkLabel}
        </a>
      </fieldset>
    </form>
  )
}

export default UserForm
