import { TClick } from 'shared/ui/Button/types'
import { TInput } from '../../shared/ui/Input/types.d'

export type TProfileForm = {
  fields: TInput[]
  passwordFields: TInput[]
  avatarImgSrc?: string
  events?: {
    submit?: Function
  }
  onSavePasswordButtonClick?: TClick
}
