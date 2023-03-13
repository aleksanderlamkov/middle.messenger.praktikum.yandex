// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from 'shared/ui/Fragment'
import PageHeader from 'shared/ui/PageHeader'
import UserForm from 'widgets/UserForm'
import { TInput, VALIDATION_PATTERNS } from 'shared/ui/Input/types.d'

const title = 'Sign In'
const fields: TInput[] = [
  {
    name: 'login',
    label: 'Login',
    placeholder: 'Username',
    validationPatterns: [
      VALIDATION_PATTERNS.DEFAULT_LOGIN,
      VALIDATION_PATTERNS.MINIMUM_ONE_LETTER,
    ],
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Your password',
    type: 'password',
    validationPatterns: [VALIDATION_PATTERNS.PASSWORD],
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
