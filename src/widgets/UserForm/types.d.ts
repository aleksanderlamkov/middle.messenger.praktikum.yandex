import { TInput } from '../../shared/ui/Input/types.d'

export type TUserForm = {
  fields: TInput[]
  submitButtonLabel: string
  linkHref: string
  linkLabel: string
  events?: {
    submit?: Function
  }
}
