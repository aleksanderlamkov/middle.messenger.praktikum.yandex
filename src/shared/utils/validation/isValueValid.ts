const isValueValid = (value: string, regExp: RegExp): boolean => {
  const clearValue = value.trim()

  return regExp.test(clearValue)
}

export default isValueValid
