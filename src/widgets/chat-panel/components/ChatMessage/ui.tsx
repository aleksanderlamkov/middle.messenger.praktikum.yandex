import jsxToDOM from 'jsxToDOM'
import classNames from '../../../../shared/utils/classNames'
import { TChatMessage } from './types'
import './ChatMessage.pcss'

const ChatMessage = (props: TChatMessage) => {
  const {
    text,
    date,
    isUserReply = false,
    isSend = false,
    isRead = false,
  } = props

  return (
    <div
      className={classNames('chat-message', {
        'chat-message--user-reply': isUserReply,
      })}
    >
      <div className="chat-message__inner">
        <div className="chat-message__text">{text}</div>
        <div className="chat-message__info">
          <time className="chat-message__date">{date}</time>
          {isUserReply && (
            <div className="chat-message__indicator">
              {isSend && !isRead && (
                <img
                  className="chat-message__indicator-icon"
                  src="/icons/send.svg"
                  alt="Sent"
                  width="15"
                  height="12"
                  loading="lazy"
                  title="Sent"
                />
              )}
              {isSend && isRead && (
                <img
                  className="chat-message__indicator-icon"
                  src="/icons/read.svg"
                  alt="Read"
                  width="20"
                  height="12"
                  loading="lazy"
                  title="Read"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatMessage
