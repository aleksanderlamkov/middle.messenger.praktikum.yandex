import { TUserService } from 'shared/services/usersServices/types'
import {
  TAvatarUploadControl,
  TAvatarUploadControlOnChange,
} from './components/AvatarUploadControl/types'

export type TAvatarUpload = Omit<TAvatarUploadControl, 'events'> & {
  className?: string
  buttonLabel?: string
  imgSrc?: string
  error?: string
  onChange?: TAvatarUploadControlOnChange
  onAfterUpload?: TUserService['changeAvatar']
}
