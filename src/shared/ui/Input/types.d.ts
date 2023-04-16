import { TPattern } from 'shared/utils/validation/types'
import {
  TInputControl,
  TInputControlBlur,
  TInputControlFocus,
} from './components/InputControl/types'

export type TInput = Omit<TInputControl, 'events'> & {
  className?: string
  label?: string
  patterns?: TPattern[]
  errors?: string[]
  value?: string
  onFocus?: TInputControlFocus
  onBlur?: TInputControlBlur
}
