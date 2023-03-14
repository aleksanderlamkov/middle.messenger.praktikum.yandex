// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from 'shared/ui/Fragment'
import PageHeader from 'shared/ui/PageHeader'
import ProfileForm from 'widgets/ProfileForm'
import { TInput } from 'shared/ui/Input/types.d'
import patterns from 'shared/utils/validation/patterns'

const fields: TInput[] = [
  {
    name: 'first_name',
    label: 'First name',
    placeholder: 'Your first name',
    patterns: [patterns.onlyLettersDash],
  },
  {
    name: 'phone',
    label: 'Phone',
    placeholder: '+7 (999) 999-99-99',
    type: 'tel',
    patterns: [patterns.phoneLength, patterns.onlyNumbersFirstMayPlus],
  },
  {
    name: 'second_name',
    label: 'Second name',
    placeholder: 'Your second name',
    patterns: [patterns.onlyLettersDash],
  },
  {
    name: 'display_name',
    label: 'Display name',
    placeholder: 'Your display name',
    patterns: [patterns.onlyLettersDash],
  },
  {
    name: 'password',
    label: 'Current password',
    placeholder: 'Your current password',
    type: 'password',
    patterns: [
      patterns.passwordLength,
      patterns.minimumOneUppercaseLetter,
      patterns.minimumOneNumber,
    ],
  },
  {
    name: 'login',
    label: 'Login',
    placeholder: 'Your login',
    patterns: [patterns.loginLength, patterns.onlyLettersNumbersDashUnderscore],
  },
  {
    name: 'new-password',
    label: 'New password',
    placeholder: 'Your new password',
    type: 'password',
    patterns: [
      patterns.passwordLength,
      patterns.minimumOneUppercaseLetter,
      patterns.minimumOneNumber,
    ],
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'example@email.com',
    type: 'email',
    patterns: [patterns.email],
  },
  {
    name: 'password-repeat',
    label: 'Repeat password',
    placeholder: 'New password again',
    type: 'password',
    patterns: [
      patterns.passwordLength,
      patterns.minimumOneUppercaseLetter,
      patterns.minimumOneNumber,
    ],
  },
]

const ProfilePage = () => {
  return (
    <Fragment>
      <PageHeader title="Profile settings" />
      <Fragment>{new ProfileForm({ fields })}</Fragment>
    </Fragment>
  )
}

export default ProfilePage
