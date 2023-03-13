// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import { Event } from 'shared/types'
import UI from './ui'
import { TAvatarUpload } from './types'

class AvatarUpload extends Block<TAvatarUpload> {
  private validImageExtensions = ['png', 'jpg', 'jpeg']

  constructor(props: TAvatarUpload) {
    super(UI, {
      ...props,
      onChange: (event: Event<HTMLInputElement>) => this.handleChange(event),
    })

    return this.render()
  }

  isImage(file: File) {
    const extension = file.type.split('/').at(-1) || ''

    return this.validImageExtensions.includes(extension)
  }

  handleChange({ target }: Event<HTMLInputElement>) {
    const file = target.files?.[0]

    if (file) {
      this.setPreviewImage(file)
    }
  }

  resetError() {
    this.setProps({ error: '' })
  }

  setPreviewImage(file: File) {
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
