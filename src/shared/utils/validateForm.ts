import { TInput } from '../ui/input/types.d'
import Input from '../ui/input'

const validateForm = (form: HTMLFormElement, fields: TInput[]): boolean => {
  const requiredFields = fields.filter(({ validationPatterns }) => {
    return validationPatterns && validationPatterns.length > 0
  })

  const validFields = requiredFields.reduce(
    (sum, { name, validationPatterns = [] }) => {
      const isValid = Input.manageValidation(form[name], validationPatterns)

      if (isValid) return sum + 1
      return sum
    },
    0
  )

  return validFields === requiredFields.length
}

export default validateForm
