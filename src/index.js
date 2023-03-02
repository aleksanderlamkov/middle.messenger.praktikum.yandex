import render from './shared/utils/render'
import { AvatarUploadCollection } from './shared/ui/avatar-upload/avatar-upload'
import { initRouter } from './pages/routes'
import './app/styles'

const initModules = () => {
  new AvatarUploadCollection()
}

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('is-dom-ready')

  import('./app/template.ejs').then((markup) => {
    render('#root', markup)

    initRouter((markup) => {
      render('#app-content', markup)
      initModules()
    })
  })
})
