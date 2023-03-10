import Block from '../../../../utils/generic/block'
import jsxToDOM from 'jsxToDOM'
import UI from './ui'
import { TAvatarUploadControl } from './types'

class AvatarUploadControl extends Block<TAvatarUploadControl> {
  constructor(props) {
    super(UI, props)

    return this.render()
  }
}

export default AvatarUploadControl
