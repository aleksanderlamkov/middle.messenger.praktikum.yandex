import render from './shared/utils/render'
import App from './app'
import './app/styles'

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('is-dom-ready')
  render('#root', App())
})
