import render from './shared/utils/render'
import { AvatarUploadCollection } from './shared/ui/avatar-upload/avatar-upload'
import './app/styles'

const initModules = () => {
  new AvatarUploadCollection()
}

const afterImport = (markup) => {
  render('#root', markup)

  initModules()
}

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('is-dom-ready')

  import('./app/template.ejs').then(afterImport)
})