type Value = string | number | boolean | undefined | null
type Mapping = Record<string, unknown>
interface ArgumentArray extends Array<Argument> {}
type Argument = Value | Mapping | ArgumentArray

function classNames(..._args: ArgumentArray): string {
  const classes: Value[] = []
  const hasOwn = {}.hasOwnProperty

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i]
    if (!arg) continue

    const argType = typeof arg
    const isString = argType === 'string'
    const isNumber = argType === 'number'
    const isObject = argType === 'object'

    if (isString || isNumber) {
      classes.push(arg)
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = classNames.apply(null, arg)
        if (inner) {
          classes.push(inner)
        }
      }
    } else if (isObject) {
      if (arg.toString === Object.prototype.toString) {
        for (let key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key)
          }
        }
      } else {
        classes.push(arg.toString())
      }
    }
  }

  return classes.join(' ')
}

export default classNames
