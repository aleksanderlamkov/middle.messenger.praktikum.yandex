// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from 'shared/ui/Fragment'
import PageHeader from 'shared/ui/PageHeader'
import UserForm from 'widgets/UserForm'
import { TInput } from 'shared/ui/Input/types.d'
import patterns from 'shared/utils/validation/patterns'
import { setCookie } from 'shared/utils/cookie'
import authServices from 'shared/services/authServices'
import Router from '../Router'

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
  const onSuccess = () => {
    setCookie('isAuth', 'true')
    Router.navigateTo('/messenger')
  }

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
            fetchFn: authServices.signIn,
            onSuccess,
          })
        }
      </Fragment>
    </Fragment>
  )
}

export default SignInPage
