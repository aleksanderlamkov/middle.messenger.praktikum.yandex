type TClassName = string | number | boolean | undefined | null
type Mapping = Record<string, unknown>
type Argument = TClassName | Mapping | ArgumentArray

interface ArgumentArray extends Array<Argument> {}

const classNames = (...args: ArgumentArray): string => {
  const classes: TClassName[] = []
  const filteredArgs = args.filter(Boolean)

  filteredArgs.forEach((arg) => {
    const argType = typeof arg
    const isString = argType === 'string'
    const isNumber = argType === 'number'
    const isPrimitiveType = isString || isNumber
    const isArray = Array.isArray(arg)
    const isObject = argType === 'object'

    if (isPrimitiveType) {
      classes.push(arg as TClassName)
    }

    if (isArray && arg.length) {
      classes.push(classNames(...arg) as TClassName)
    } else if (isObject) {
      const hasStringifyMethod = arg?.toString === Object.prototype.toString

      if (hasStringifyMethod) {
        Object.keys(arg).forEach((key) => {
          const hasOwnKey =
            {}.hasOwnProperty.call(arg, key) && arg[key as keyof object]
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
