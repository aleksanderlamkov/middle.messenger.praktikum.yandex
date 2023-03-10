import { VALIDATION_PATTERNS } from '../../utils/validation'
import { TInputControl, TInputControlBlur, TInputControlFocus } from './components/InputControl/types'

export type TInput = Omit<TInputControl, 'events'> & {
  className?: string
  label?: string
  validationPatterns?: VALIDATION_PATTERNS[]
  onFocus?: TInputControlFocus
  onBlur?: TInputControlBlur
}
