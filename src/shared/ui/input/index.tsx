import Block from '../../utils/generic/block'
import jsxToDOM from 'jsxToDOM'
import UI from './ui'
import { TInput } from './types'
import { validateValue, VALIDATION_PATTERNS } from '../../utils/validation'

const stateClasses: Record<string, string> = {
  isInvalid: 'is-invalid',
}

class Input extends Block<TInput> {
  constructor(props) {
    super(UI, {
      ...props,
      events: {
        focus: (event) => this.handleFocus(event),
        blur: (event) => this.handleBlur(event),
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

  handleFocus({ target }) {
    Input.manageValidation(target, this.props.validationPatterns)
  }

  handleBlur({ target }) {
    Input.manageValidation(target, this.props.validationPatterns)
  }
}

export default Input
