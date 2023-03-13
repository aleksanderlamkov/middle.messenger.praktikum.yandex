import {
  TInputControl,
  TInputControlBlur,
  TInputControlFocus,
} from './components/InputControl/types'

export enum VALIDATION_PATTERNS {
  NOT_EMPTY = '(.|s)*S(.|s)*',
  ONLY_LETTERS_FIRST_UPPERCASE = '^[A-ZА-Я]+[a-zA-Zа-яё]*$',
  DEFAULT_LOGIN = '[0-9a-zA-Z-_]{3,20}$',
  MINIMUM_ONE_LETTER = '[a-zA-Z]',
  PASSWORD = '(?=.*?[0-9])(?=.*?[A-Za-z]){8,40}.+',
  EMAIL = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
  PHONE = '^\\+?\\d{10,15}$',
}

export type TInput = Omit<TInputControl, 'events'> & {
  className?: string
  label?: string
  validationPatterns?: VALIDATION_PATTERNS[]
  onFocus?: TInputControlFocus
  onBlur?: TInputControlBlur
}
