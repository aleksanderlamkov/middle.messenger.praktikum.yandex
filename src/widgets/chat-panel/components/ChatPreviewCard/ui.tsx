import jsxToDOM from 'jsxToDOM'
import { TChatPreviewCard } from './types'
import './ChatPreviewCard.pcss'
import classNames from '../../../../shared/utils/classNames'

const ChatPreviewCard = (props: TChatPreviewCard) => {
  const {
    avatarSrc = '/images/avatar-placeholder.jpg',
    title,
    date,
    message,
    unreadMessages = 0,
    isUserReply = false,
    isActive = false,
  } = props

  const hasUnreadMessages = unreadMessages > 0

  return (
    <div className={classNames('chat-preview-card', { 'is-active': isActive })}>
      <img
        className="chat-preview-card__avatar"
        src={avatarSrc}
        alt={`Avatar of ${title}`}
        width="50"
        height="50"
        loading="lazy"
      />
      <div className="chat-preview-card__body">
        <header className="chat-preview-card__header">
          <h3 className="chat-preview-card__title">{title}</h3>
          <time className="chat-preview-card__date">{date}</time>
        </header>
        <div className="chat-preview-card__info">
          {isUserReply && (
            <div className="chat-preview-card__user-reply">You:</div>
          )}
          <div className="chat-preview-card__message">{message}</div>
          {hasUnreadMessages && (
            <div className="chat-preview-card__unread-indicator">
              {unreadMessages}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatPreviewCard
