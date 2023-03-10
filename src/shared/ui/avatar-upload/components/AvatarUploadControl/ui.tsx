import jsxToDOM from 'jsxToDOM'
import { TAvatarUploadControl } from './types'

const AvatarUploadControl = (props: TAvatarUploadControl) => {
  const { id, name } = props

  return (
    <input
      className="avatar-upload__control visually-hidden"
      id={id}
      name={name}
      type="file"
    />
  )
}

export default AvatarUploadControl
