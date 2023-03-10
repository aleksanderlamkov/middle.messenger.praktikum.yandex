import jsxToDOM from 'jsxToDOM'
import Input from '../../shared/ui/input'
import Button from '../../shared/ui/button'
import { TUserForm } from './types'
import './user-form.pcss'

const UserForm = (props: TUserForm): HTMLElement => {
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
          new Input({
            className: 'user-form__input',
            ...field,
          })
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
