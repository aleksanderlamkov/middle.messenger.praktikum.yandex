type Value = string | number | boolean | undefined | null
type Mapping = Record<string, unknown>
interface ArgumentArray extends Array<Argument> {}
type Argument = Value | Mapping | ArgumentArray

const classNames = (...args: ArgumentArray): string => {
  const classes: Value[] = []
  const hasOwn = {}.hasOwnProperty
  const filteredArgs = args.filter(Boolean)

  filteredArgs.forEach((arg) => {
    const argType = typeof arg
    const isString = argType === 'string'
    const isNumber = argType === 'number'
    const isPrimitiveType = isString || isNumber
    const isArray = Array.isArray(arg)
    const isObject = argType === 'object'

    if (isPrimitiveType) {
      classes.push(arg as Value)
    }

    if (isArray && arg.length) {
      classes.push(...(arg as Value[]))
    }

    if (isObject) {
      const hasStringifyMethod = arg?.toString === Object.prototype.toString

      if (hasStringifyMethod) {
        Object.keys(arg).forEach((key) => {
          const hasOwnKey = hasOwn.call(arg, key) && arg[key as keyof object]
          if (hasOwnKey) classes.push(key)
        })
      } else {
        classes.push(arg?.toString())
      }
    }
  })

  return classes.join(' ')
}

export default classNames
