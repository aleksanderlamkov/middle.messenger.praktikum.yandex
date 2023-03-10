import jsxToDOM from 'jsxToDOM'
import Input from '../../../../shared/ui/input'
import { VALIDATION_PATTERNS } from '../../../../shared/utils/validation'
import './ChatForm.pcss'

const ChatForm = () => {
  return (
    <form className="chat-form">
      {new Input({
        className: 'chat-form__input',
        name: 'user-message',
        placeholder: 'Message...',
        validationPatterns: [VALIDATION_PATTERNS.NOT_EMPTY]
      })}
      <button
        className="chat-form__button"
        type="submit"
        title="Send message"
      >
        <img
          className="chat-form__button-icon"
          src="/icons/send-2.svg"
          alt="Send"
          width="50"
          height="50"
          loading="lazy"
          ariaLabel="Send message"
        />
      </button>
    </form>
  )
}

export default ChatForm
