// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from '../../utils/generic/block'
import UI from './ui'
import { TInput } from './types'
import { validateValue, VALIDATION_PATTERNS } from '../../utils/validation'
import { Event } from '../../types'

const stateClasses: Record<string, string> = {
  isInvalid: 'is-invalid',
}

class Input extends Block<TInput> {
  constructor(props: TInput) {
    super(UI, {
      ...props,
      events: {
        focus: (event: Event<HTMLInputElement>) => this.handleFocus(event),
        blur: (event: Event<HTMLInputElement>) => this.handleBlur(event),
      },
    })

    return this.render()
  }

  static manageValidation(input: HTMLInputElement, validationPatterns?: VALIDATION_PATTERNS[]): boolean {
    const shouldValidate = validationPatterns && validationPatterns.length > 0
    if (!shouldValidate) return true

    const isValid = validateValue(input.value, validationPatterns)

    input.classList.toggle(stateClasses.isInvalid, !isValid)

    return isValid
  }

  handleFocus({ target }: Event<HTMLInputElement>) {
    Input.manageValidation(target, this.props.validationPatterns)
  }

  handleBlur({ target }: Event<HTMLInputElement>) {
    Input.manageValidation(target, this.props.validationPatterns)
  }
}

export default Input
