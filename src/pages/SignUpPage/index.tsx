// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from '../../shared/ui/fragment'
import PageHeader from '../../shared/ui/page-header'
import UserForm from '../../widgets/user-form'
import { TInput, VALIDATION_PATTERNS } from '../../shared/ui/input/types.d'

const title = 'Sign Up'
const fields: TInput[] = [
  {
    name: 'first_name',
    label: 'First name',
    placeholder: 'Your first name',
    validationPatterns: [VALIDATION_PATTERNS.ONLY_LETTERS_FIRST_UPPERCASE],
  },
  {
    name: 'second_name',
    label: 'Second name',
    placeholder: 'Your second name',
    validationPatterns: [VALIDATION_PATTERNS.ONLY_LETTERS_FIRST_UPPERCASE],
  },
  {
    name: 'login',
    label: 'Login',
    placeholder: 'Your login',
    validationPatterns: [
      VALIDATION_PATTERNS.DEFAULT_LOGIN,
      VALIDATION_PATTERNS.MINIMUM_ONE_LETTER,
    ],
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'example@email.com',
    type: 'email',
    validationPatterns: [VALIDATION_PATTERNS.EMAIL],
  },
  {
    name: 'phone',
    label: 'Phone',
    placeholder: '+7 (999) 999-99-99',
    type: 'tel',
    validationPatterns: [VALIDATION_PATTERNS.PHONE],
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Your password',
    type: 'password',
    validationPatterns: [VALIDATION_PATTERNS.PASSWORD],
  },
  {
    name: 'password_repeat',
    label: 'Repeat password',
    placeholder: 'Your password again',
    type: 'password',
    validationPatterns: [VALIDATION_PATTERNS.PASSWORD],
  },
]

const SignUpPage = () => {
  return (
    <Fragment>
      <PageHeader title={title} />
      {
        new UserForm({
          fields,
          submitButtonLabel: title,
          linkHref: '/',
          linkLabel: 'Sign In',
        })
      }
    </Fragment>
  )
}

export default SignUpPage
