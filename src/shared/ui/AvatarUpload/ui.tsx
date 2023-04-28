// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from 'shared/utils/classNames'
import Fragment from 'shared/ui/Fragment'
import defaultAvatarSrc from 'assets/images/avatar-placeholder.jpg'
import AvatarUploadControl from './components/AvatarUploadControl'
import { TAvatarUpload } from './types'
import './AvatarUpload.pcss'

const AvatarUpload = (props: TAvatarUpload) => {
  const {
    className = '',
    id = 'avatar',
    name = 'avatar',
    buttonLabel = 'Change avatar',
    imgSrc = defaultAvatarSrc,
    error,
    onChange,
  } = props

  return (
    <div className={classNames(className, 'avatar-upload')}>
      <img
        className="avatar-upload__image"
        src={imgSrc}
        alt="Your avatar"
        width="124"
        height="124"
        loading="lazy"
      />
      <Fragment>
        {
          new AvatarUploadControl({
            id,
            name,
            events: { change: onChange },
          })
        }
      </Fragment>
      <label className="avatar-upload__button button" htmlFor={id}>
        {buttonLabel}
      </label>
      {error && <span className="avatar-upload__error">{error}</span>}
    </div>
  )
}

export default AvatarUpload
