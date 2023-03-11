// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from '../../../../utils/generic/block'
import UI from './ui'
import { TAvatarUploadControl } from './types'

class AvatarUploadControl extends Block<TAvatarUploadControl> {
  constructor(props: TAvatarUploadControl) {
    super(UI, props)

    return this.render()
  }
}

export default AvatarUploadControl
