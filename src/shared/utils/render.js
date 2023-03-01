const render = (selector, markup) => {
  const node = document.querySelector(selector)

  if (!node) {
    console.error(`Node by selector '${selector}' is not found at current page!`)
    return
  }

  node.innerHTML = markup
}

export default render
