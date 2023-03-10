import { TAvatarUploadControl, TAvatarUploadControlOnChange } from './components/AvatarUploadControl/types'

export type TAvatarUpload = Omit<TAvatarUploadControl, 'events'> & {
  className?: string
  buttonLabel?: string
  imgSrc?: string
  error?: string
  onChange: TAvatarUploadControlOnChange
}
