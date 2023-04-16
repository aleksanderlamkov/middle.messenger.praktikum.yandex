import { TAuthService } from 'shared/services/authServices/types'
import { TInput } from '../../shared/ui/Input/types.d'

export type TUserForm = {
  fields: TInput[]
  submitButtonLabel: string
  linkHref: string
  linkLabel: string
  excludeFields?: string[]
  events?: {
    submit?: Function
  }
  fetchFn: TAuthService[keyof TAuthService]
  onSuccess: (response: any) => void
}
