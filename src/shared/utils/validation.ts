import { TInput } from '../ui/input/types'
import Input from '../ui/input'

export enum VALIDATION_PATTERNS {
  NOT_EMPTY = '(.|\s)*\S(.|\s)*',
  ONLY_LETTERS_FIRST_UPPERCASE = '^[A-ZА-Я]+[a-zA-Zа-яё]*$',
  DEFAULT_LOGIN = '[0-9a-zA-Z-_]{3,20}$',
  MINIMUM_ONE_LETTER = '[a-zA-Z]',
  PASSWORD = '(?=.*?[0-9])(?=.*?[A-Za-z]){8,40}.+',
  EMAIL = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
  PHONE = '^\\+?\\d{10,15}$',
}

export const validateValue = (value: string, patterns: VALIDATION_PATTERNS[]): boolean => {
  return patterns.every((pattern) => {
    const regExp = new RegExp(pattern)

    return regExp.test(value)
  })
}

export const validateForm = (form: HTMLFormElement, fields: TInput[]): boolean => {
  const requiredFields = fields.filter(({ validationPatterns }) => {
    return validationPatterns && validationPatterns.length > 0
  })

  const validFields = requiredFields.reduce((sum, { name, validationPatterns }) => {
    const isValid = Input.manageValidation(form[name], validationPatterns)

    if (isValid) return sum + 1
    return sum
  }, 0)

  return validFields === requiredFields.length
}
