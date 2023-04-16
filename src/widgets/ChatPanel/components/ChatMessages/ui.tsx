// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import ChatMessage from 'widgets/ChatPanel/components/ChatMessage/ui'
import { TChatMessages } from './types'

const ChatMessages = (props: TChatMessages) => {
  const { messages = [] } = props

  const hasMessages = messages.length > 0

  return (
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
  )
}

export default ChatMessages
