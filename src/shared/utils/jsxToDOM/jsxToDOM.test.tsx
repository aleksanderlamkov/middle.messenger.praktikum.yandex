import { expect } from 'chai'
// @ts-ignore
import jsxToDOM from './index'

describe('jsxToDom', () => {
  const element = jsxToDOM('div', { className: 'test-class' }, 'Content')

  const equalElement = document.createElement('div')
  equalElement.className = 'test-class'
  equalElement.textContent = 'Content'

  it('Tags are the same', () => {
    expect(element.tagName).equal(equalElement.tagName)
  })

  it('Attributes className are the same', () => {
    expect(element.className).equal(equalElement.className)
  })

  it('TextContent are the same', () => {
    expect(element.textContent).equal(equalElement.textContent)
  })
})
