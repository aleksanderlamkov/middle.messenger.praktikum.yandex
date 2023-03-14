// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from 'shared/ui/Fragment'
import PageHeader from 'shared/ui/PageHeader'
import UserForm from 'widgets/UserForm'
import { TInput } from 'shared/ui/Input/types.d'
import patterns from 'shared/utils/validation/patterns'

const title = 'Sign Up'
const fields: TInput[] = [
  {
    name: 'first_name',
    label: 'First name',
    placeholder: 'Your first name',
    patterns: [patterns.onlyLettersDash],
  },
  {
    name: 'second_name',
    label: 'Second name',
    placeholder: 'Your second name',
    patterns: [patterns.onlyLettersDash],
  },
  {
    name: 'login',
    label: 'Login',
    placeholder: 'Your login',
    patterns: [patterns.loginLength, patterns.onlyLettersNumbersDashUnderscore],
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'example@email.com',
    type: 'email',
    patterns: [patterns.email],
  },
  {
    name: 'phone',
    label: 'Phone',
    placeholder: '+7 (999) 999-99-99',
    type: 'tel',
    patterns: [patterns.phoneLength, patterns.onlyNumbersFirstMayPlus],
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
  {
    name: 'password_repeat',
    label: 'Repeat password',
    placeholder: 'Your password again',
    type: 'password',
    patterns: [
      patterns.passwordLength,
      patterns.minimumOneUppercaseLetter,
      patterns.minimumOneNumber,
    ],
  },
]

const SignUpPage = () => {
  return (
    <Fragment>
      <PageHeader title={title} />
      <Fragment>
        {
          new UserForm({
            fields,
            submitButtonLabel: title,
            linkHref: '/',
            linkLabel: 'Sign In',
          })
        }
      </Fragment>
    </Fragment>
  )
}

export default SignUpPage
