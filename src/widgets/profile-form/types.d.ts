import { TInput } from '../../shared/ui/input/types.d'

export type TProfileForm = {
  fields: TInput[]
  events?: {
    submit?: Function
  }
}
