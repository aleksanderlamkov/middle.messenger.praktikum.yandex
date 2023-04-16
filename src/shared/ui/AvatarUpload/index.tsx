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
    const { onAfterUpload } = this.props
    const file = target.files?.[0]
    if (!file) return

    // @ts-ignore
    onAfterUpload(file)
      .then((response: { reason: string; avatar: string }) => {
        const { reason, avatar } = response

        if (reason) {
          alert(reason)
        } else {
          this.setProps({
            imgSrc: `https://ya-praktikum.tech/api/v2/resources/${avatar}`,
          })
        }
      })
      .catch(alert)
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
