type TElement = string | Function
type TProperties = Record<string, unknown>
type TChildren = Array<HTMLElement | string>

const getNonNullableProperties = (
  value: TProperties,
  fallback: TProperties = {}
): TProperties => {
  return value || fallback
}

const getParsedChildren = (
  children: TChildren
): Array<HTMLElement | string | Text> => {
  return children.map((child) => {
    const type = typeof child
    const isString = type === 'string'
    const isNumber = type === 'number'

    return isString || isNumber
      ? document.createTextNode(child.toString())
      : child
  })
}

const getParsedNode = (
  element: string,
  properties: TProperties,
  children: TChildren
) => {
  const _element = document.createElement(element)

  Object.keys(getNonNullableProperties(properties, {})).forEach((key) => {
    ;(_element as any)[key] = properties[key]
  })

  const renderChildren = (_children: TChildren): void => {
    getParsedChildren(_children).forEach((content) => {
      if (content) {
        const isArray = Array.isArray(content)

        if (isArray) {
          renderChildren(content)
        } else {
          _element.appendChild(content as Node)
        }
      }
    })
  }

  renderChildren(children)

  /**
   * Unique ID for correct rendering of 'flow:component-did-mount' phase
   */
  const id: string =
    Date.now().toString(36) + Math.random().toString(36).substring(2)

  _element.dataset.key = id

  return _element
}

/**
 * Main render function
 */
const jsxToDOM = (
  element: TElement,
  properties: TProperties,
  ...children: TChildren
): HTMLElement => {
  const isFunction = typeof element === 'function'

  return isFunction
    ? element({
        ...getNonNullableProperties(properties, {}),
        children,
      })
    : getParsedNode(element, properties, children)
}

export default jsxToDOM
