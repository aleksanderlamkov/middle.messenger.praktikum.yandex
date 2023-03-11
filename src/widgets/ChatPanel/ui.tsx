// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import ChatPreviewCard from './components/ChatPreviewCard/ui'
import ChatMessage from './components/ChatMessage/ui'
import ChatForm from './components/ChatForm'
import Fragment from '../../shared/ui/Fragment'
import { TChatPanel } from './types'
import './ChatPanel.pcss'

const ChatPanel = (props: TChatPanel) => {
  const { chatPreviewItems = [], currentDialog } = props

  const {
    title,
    avatarSrc = '/images/avatar-placeholder.jpg',
    messages = [],
  } = currentDialog

  const hasChatPreviewItems = chatPreviewItems.length > 0
  const hasMessages = messages.length > 0

  return (
    <div className="chat-panel">
      <div className="chat-panel__dialogs">
        {hasChatPreviewItems && (
          <ul className="chat-panel__dialogs-list">
            {chatPreviewItems.map((chatPreviewItem) => (
              <li className="chat-panel__dialogs-item">
                <ChatPreviewCard {...chatPreviewItem} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="chat-panel__current-dialog">
        <header className="chat-panel__header">
          <img
            className="chat-panel__avatar"
            src={avatarSrc}
            alt={`Avatar of ${title}`}
            width="50"
            height="50"
            loading="lazy"
          />
          <h2 className="chat-panel__title">{title}</h2>
        </header>
        <div className="chat-panel__body">
          <div className="chat-panel__messages">
            {hasMessages && (
              <ul className="chat-panel__messages-list">
                {messages.map((message) => (
                  <li className="chat-panel__messages-item">
                    <ChatMessage {...message} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Fragment>{new ChatForm({})}</Fragment>
        </div>
      </div>
    </div>
  )
}

export default ChatPanel
