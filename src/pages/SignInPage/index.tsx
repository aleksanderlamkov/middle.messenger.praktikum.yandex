// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from 'shared/ui/Fragment'
import PageHeader from 'shared/ui/PageHeader'
import UserForm from 'widgets/UserForm'
import { TInput } from 'shared/ui/Input/types.d'
import patterns from 'shared/utils/validation/patterns'

const title = 'Sign In'
const fields: TInput[] = [
  {
    name: 'login',
    label: 'Login',
    placeholder: 'Username',
    patterns: [patterns.loginLength, patterns.onlyLettersNumbersDashUnderscore],
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Your password',
    type: 'password',
    patterns: [
      patterns.passwordLength,
      patterns.minimumOneUppercaseLetter,
      patterns.minimumOneNumber,
    ],
  },
]

const SignInPage = () => {
  return (
    <Fragment>
      <PageHeader title={title} />
      <Fragment>
        {
          new UserForm({
            fields,
            submitButtonLabel: title,
            linkHref: '/',
            linkLabel: 'Sign Up',
          })
        }
      </Fragment>
    </Fragment>
  )
}

export default SignInPage
