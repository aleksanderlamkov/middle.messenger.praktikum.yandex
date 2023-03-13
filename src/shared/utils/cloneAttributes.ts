const cloneAttributes = (
  targetElement: HTMLElement,
  sourceElement: HTMLElement,
  excludeAttributes: string[] = []
): void => {
  const sourceAttributes = [...sourceElement.attributes]

  sourceAttributes.forEach(({ nodeName, nodeValue }) => {
    const isExclude = excludeAttributes.includes(nodeName)

    if (!isExclude) {
      targetElement.setAttribute(nodeName, nodeValue || '')
    }
  })
}

export default cloneAttributes
