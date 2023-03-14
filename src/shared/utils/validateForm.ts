import { TInput } from '../ui/Input/types.d'
import Input from '../ui/Input'

const validateForm = (form: HTMLFormElement, fields: TInput[]): boolean => {
  const requiredFields = fields.filter(({ patterns }) => {
    return patterns && patterns.length > 0
  })

  const validFields = requiredFields.reduce((sum, { name, patterns = [] }) => {
    const isValid = Input.manageValidation(form[name], patterns)

    if (isValid) return sum + 1
    return sum
  }, 0)

  return validFields === requiredFields.length
}

export default validateForm
