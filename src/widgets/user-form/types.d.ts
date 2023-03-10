import { TInput } from '../../shared/ui/input/types'

export type TUserForm = {
  fields: TInput[]
  submitButtonLabel: string
  linkHref: string
  linkLabel: string
  events: {
    submit?: Function
  }
}
