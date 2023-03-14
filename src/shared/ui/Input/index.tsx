// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import { Event } from 'shared/types'
import { TPattern } from 'shared/utils/validation/types'
import isValueValid from 'shared/utils/validation/isValueValid'
import UI from './ui'
import { TInput } from './types'

const stateClasses: Record<string, string> = {
  isInvalid: 'is-invalid',
}

const selectors = {
  root: '.input',
  errors: '.input__errors',
}

class Input extends Block<TInput> {
  constructor(props: TInput) {
    super(UI, {
      ...props,
      onFocus: (event: Event<HTMLInputElement>) => this.handleFocus(event),
      onBlur: (event: Event<HTMLInputElement>) => this.handleBlur(event),
    })

    return this.render()
  }

  static manageValidation(
    input: HTMLInputElement,
    patterns?: TPattern[]
  ): boolean {
    const shouldValidate = patterns && patterns.length > 0
    if (!shouldValidate) return true

    const { value } = input
    const errors: string[] = []

    patterns?.forEach(({ regExp, message }) => {
      const isValid = isValueValid(value, regExp)

      if (!isValid) {
        errors.push(message)
      }
    })

    const isValid = errors.length === 0

    input.classList.toggle(stateClasses.isInvalid, !isValid)
    Input.setErrors(input, errors)

    return isValid
  }

  static setErrors = (input: HTMLInputElement, errors: string[]) => {
    const rootElement = input.closest(selectors.root)
    if (!rootElement) return

    const errorsElement = rootElement.querySelector(selectors.errors)
    if (!errorsElement) return

    errorsElement.innerHTML = errors
      .map((error) => `<span>${error}</span>`)
      .join('')
  }

  handleFocus({ target }: Event<HTMLInputElement>) {
    Input.manageValidation(target, this.props.patterns)
  }

  handleBlur({ target }: Event<HTMLInputElement>) {
    Input.manageValidation(target, this.props.patterns)
  }
}

export default Input
