import getParams from '../../utils/getParams'

const instance = '[data-js-avatar-upload]'

class AvatarUpload {
  els = {
    instance,
    image: '[data-js-avatar-upload-image]',
    control: '[data-js-avatar-upload-image-control]',
    error: '[data-js-avatar-upload-image-error]',
  }

  stateClasses = {
    isInvalid: 'is-invalid',
  }

  defaultParams = {
    validImageExtensions: ['png', 'jpg', 'jpeg'],
  }

  constructor(node) {
    this.instance = node
    this.imageNode = this.instance.querySelector(this.els.image)
    this.control = this.instance.querySelector(this.els.control)
    this.errorNode = this.instance.querySelector(this.els.error)
    this.params = getParams(this.instance, instance, this.defaultParams)
    this.bindEvents()
  }

  setError(label) {
    this.errorNode.textContent = label
    this.instance.classList.toggle(this.stateClasses.isInvalid, label)
  }

  resetError() {
    this.setError('')
  }

  isImage(file) {
    const { validImageExtensions } = this.params
    const extension = file.type.split('/').at(-1)

    return validImageExtensions.includes(extension)
  }

  setPreviewImage() {
    const file = this.control.files?.[0]

    if (!file) return

    if (!this.isImage(file)) {
      this.setError('Incorrect file format')
      return
    }

    this.resetError()

    const reader = new FileReader()

    reader.onload = (event) => {
      console.debug('event:', event)
      const { target } = event

      this.imageNode.src = target.result
    }

    reader.readAsDataURL(file)
  }

  handleChange() {
    this.setPreviewImage()
  }

  bindEvents() {
    this.control.addEventListener('change', () => this.handleChange())
  }
}

export class AvatarUploadCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(instance).forEach((node) => {
      new AvatarUpload(node)
    })
  }
}
