type TElement = string | Function
type TProperties = Record<string, unknown>
type TChildren = Array<HTMLElement | string>

const getNonNullable = (value: TProperties | null, fallback ): TProperties => {
  return Boolean(value) ? value : fallback
}

const getParsedChildren = (children: TChildren): Array<HTMLElement | string | Text> => {
  return children.map((child) => {
    const type = typeof child
    const isString = type === 'string'
    const isNumber = type === 'number'

    return isString || isNumber
      ? document.createTextNode(child.toString())
      : child
  })
}

const getParsedNode = (element: string, properties: TProperties, children: TChildren) => {
  const _element = document.createElement(element)

  Object.keys(getNonNullable(properties, {})).forEach((key) => {
    _element[key] = properties[key]
  })

  const renderChildren = (children: TChildren): void => {
    getParsedChildren(children).forEach((content) => {
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
  const id = Date.now().toString(36) + Math.random().toString(36).substring(2)

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
      ...getNonNullable(properties, {}),
      children,
    })
    : getParsedNode(element, properties, children)
}

export default jsxToDOM
