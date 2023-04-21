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
]

const passwordFields: TInput[] = [
  {
    name: 'oldPassword',
    label: 'Current password',
    placeholder: 'Your current password',
    type: 'password',
  },
  {
    name: 'newPassword',
    label: 'New password',
    placeholder: 'Your new password',
    type: 'password',
    patterns: [
      patterns.passwordLength,
      patterns.minimumOneUppercaseLetter,
      patterns.minimumOneNumber,
    ],
  },
]

const SettingsPage = () => {
  return (
    <Fragment>
      <PageHeader title="Profile settings" />
      <Fragment>{new ProfileForm({ fields, passwordFields })}</Fragment>
    </Fragment>
  )
}

export default SettingsPage
