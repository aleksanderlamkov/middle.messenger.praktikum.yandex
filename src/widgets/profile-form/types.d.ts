import { TInput } from '../../shared/ui/input/types'

export type TProfileForm = {
  fields: TInput[]
  events?: {
    submit?: Function
  }
}
