import { TPatterns } from './types'

const patterns: TPatterns = {
  notEmpty: {
    regExp: /(.|s)*S(.|s)*/,
    message: 'The value cannot be empty',
  },
  onlyLettersDash: {
    regExp: /^[a-z-]+$/i,
    message:
      'The value must consist only of letters and may contain "-" symbol',
  },
  firstLetterUppercase: {
    regExp: /^[A-ZА-Я][a-zа-я]*$/,
    message: 'The first letter must be uppercase',
  },
  loginLength: {
    regExp: /.{3,20}/,
    message: 'The value must consist of 3 to 20 characters',
  },
  passwordLength: {
    regExp: /.{8,40}/,
    message: 'The value must consist of 8 to 40 characters',
  },
  phoneLength: {
    regExp: /.{10,15}/,
    message: 'The value must consist of 10 to 15 characters',
  },
  minimumOneLetter: {
    regExp: /[a-z]+/i,
    message: 'The value must contain at least 1 letter',
  },
  onlyLettersNumbersDashUnderscore: {
    regExp: /^[\w-]*$/,
    message:
      'The value must consist only of letters, numbers, and may contain "_" and "-" symbol',
  },
  email: {
    regExp: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    message: 'Incorrect email value',
  },
  minimumOneUppercaseLetter: {
    regExp: /[A-Z]+/,
    message: 'The value must contain at least 1 uppercase letter',
  },
  minimumOneNumber: {
    regExp: /[\d]+/,
    message: 'The value must contain at least 1 number',
  },
  onlyNumbersFirstMayPlus: {
    regExp: /^\+?\d+$/,
    message:
      'The value must consist only of numbers, and may contain "+" symbol at the beginning',
  },
}

export default patterns
