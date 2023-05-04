// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from 'shared/utils/classNames'
import getDateFormatted from 'shared/utils/getDateFormatted'
import iconSendImgSrc from 'assets/icons/send.svg'
import iconReadImgSrc from 'assets/icons/read.svg'
import { TChatMessage } from './types'
import './ChatMessage.pcss'

const ChatMessage = (props: TChatMessage) => {
  const { isUserReply = false, content, time } = props

  const isSend = true
  const isRead = false

  return (
    <div
      className={classNames('chat-message', {
        'chat-message--user-reply': isUserReply,
      })}
    >
      <div className="chat-message__inner">
        <div className="chat-message__text">{content}</div>
        <div className="chat-message__info">
          <time className="chat-message__date">{getDateFormatted(time)}</time>
          {isUserReply && (
            <div className="chat-message__indicator">
              {isSend && !isRead && (
                <img
                  className="chat-message__indicator-icon"
                  src={iconSendImgSrc}
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
                  src={iconReadImgSrc}
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
