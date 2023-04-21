// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from 'shared/utils/classNames'
import Fragment from 'shared/ui/Fragment'
import getDateFormatted from 'shared/utils/getDateFormatted'
import { TChatPreviewCard } from './types'
import './ChatPreviewCard.pcss'

const defaultAvatarSrc = '/images/avatar-placeholder.jpg'

const ChatPreviewCard = (props: TChatPreviewCard) => {
  const {
    title,
    avatar,
    unread_count = 0,
    isUserReply = false,
    isActive = false,
    last_message,
  } = props

  const hasUnreadMessages = unread_count > 0

  const getDate = () => {
    const hasDate = last_message?.time
    if (!hasDate) return null

    return (
      <time className="chat-preview-card__date">
        {getDateFormatted(last_message?.time)}
      </time>
    )
  }

  const getMessage = () => {
    if (!last_message) return null

    return (
      <div className="chat-preview-card__message">{last_message.content}</div>
    )
  }

  const avatarImgSrc = avatar
    ? `https://ya-praktikum.tech/api/v2/resources/${avatar}`
    : defaultAvatarSrc

  return (
    <div className={classNames('chat-preview-card', { 'is-active': isActive })}>
      <img
        className="chat-preview-card__avatar"
        src={avatarImgSrc}
        alt={`Avatar of ${title}`}
        width="50"
        height="50"
        loading="lazy"
      />
      <div className="chat-preview-card__body">
        <header className="chat-preview-card__header">
          <h3 className="chat-preview-card__title">{title}</h3>
          <Fragment>{getDate()}</Fragment>
        </header>
        <div className="chat-preview-card__info">
          {isUserReply && (
            <div className="chat-preview-card__user-reply">You:</div>
          )}
          <Fragment>{getMessage()}</Fragment>
          {hasUnreadMessages && (
            <div className="chat-preview-card__unread-indicator">
              {unread_count}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatPreviewCard
