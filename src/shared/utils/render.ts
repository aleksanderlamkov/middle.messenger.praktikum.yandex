const render = (selector: string, node: HTMLElement): void => {
  const rootNode = document.querySelector(selector)

  if (!rootNode) {
    console.error(
      `Node by selector '${selector}' is not found at current page!`
    )
    return
  }

  rootNode.innerHTML = ''
  rootNode.appendChild(node)
}

export default render
