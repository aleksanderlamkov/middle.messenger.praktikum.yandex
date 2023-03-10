import Block from '../../utils/generic/block'
import jsxToDOM from 'jsxToDOM'
import UI from './ui'
import { TAvatarUpload } from './types'

class AvatarUpload extends Block<TAvatarUpload> {
  private validImageExtensions = ['png', 'jpg', 'jpeg']

  constructor(props) {
    super(UI, {
      ...props,
      onChange: (event) => this.handleChange(event),
    })

    return this.render()
  }

  isImage(file) {
    const extension = file.type.split('/').at(-1)

    return this.validImageExtensions.includes(extension)
  }

  handleChange({ target }) {
    const file = target.files?.[0]

    if (file) {
      this.setPreviewImage(file)
    }
  }

  resetError() {
    this.setProps({ error: '' })
  }

  setPreviewImage(file) {
    if (!this.isImage(file)) {
      this.setProps({ error: 'Incorrect file format' })
      return
    }

    this.resetError()

    const reader = new FileReader()

    reader.onload = (event) => {
      const { target } = event
      const imgSrc = String(target?.result)

      this.setProps({ imgSrc })
    }

    reader.readAsDataURL(file)
  }
}

export default AvatarUpload
