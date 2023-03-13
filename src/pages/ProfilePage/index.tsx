// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from 'shared/ui/Fragment'
import PageHeader from 'shared/ui/PageHeader'
import ProfileForm from 'widgets/ProfileForm'
import { TInput, VALIDATION_PATTERNS } from 'shared/ui/Input/types.d'

const fields: TInput[] = [
  {
    name: 'first_name',
    label: 'First name',
    placeholder: 'Your first name',
    validationPatterns: [VALIDATION_PATTERNS.ONLY_LETTERS_FIRST_UPPERCASE],
  },
  {
    name: 'phone',
    label: 'Phone',
    placeholder: '+7 (999) 999-99-99',
    type: 'tel',
    validationPatterns: [VALIDATION_PATTERNS.PHONE],
  },
  {
    name: 'second_name',
    label: 'Second name',
    placeholder: 'Your second name',
    validationPatterns: [VALIDATION_PATTERNS.ONLY_LETTERS_FIRST_UPPERCASE],
  },
  {
    name: 'display_name',
    label: 'Display name',
    placeholder: 'Your display name',
    validationPatterns: [VALIDATION_PATTERNS.ONLY_LETTERS_FIRST_UPPERCASE],
  },
  {
    name: 'password',
    label: 'Current password',
    placeholder: 'Your current password',
    type: 'password',
    validationPatterns: [VALIDATION_PATTERNS.PASSWORD],
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
    name: 'new-password',
    label: 'New password',
    placeholder: 'Your new password',
    type: 'password',
    validationPatterns: [VALIDATION_PATTERNS.PASSWORD],
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'example@email.com',
    type: 'email',
    validationPatterns: [VALIDATION_PATTERNS.EMAIL],
  },
  {
    name: 'password-repeat',
    label: 'Repeat password',
    placeholder: 'New password again',
    type: 'password',
    validationPatterns: [VALIDATION_PATTERNS.PASSWORD],
  },
]

const ProfilePage = () => {
  return (
    <Fragment>
      <PageHeader title="Profile settings" />
      {new ProfileForm({ fields })}
    </Fragment>
  )
}

export default ProfilePage
