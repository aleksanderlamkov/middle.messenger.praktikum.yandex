import { TInput } from '../../shared/ui/Input/types.d'

export type TProfileForm = {
  fields: TInput[]
  events?: {
    submit?: Function
  }
}
