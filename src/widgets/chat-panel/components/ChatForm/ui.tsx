// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Input from '../../../../shared/ui/input'
import { VALIDATION_PATTERNS } from '../../../../shared/ui/input/types.d'
import Fragment from '../../../../shared/ui/fragment'
import './ChatForm.pcss'

const ChatForm = () => {
  return (
    <form className="chat-form">
      <Fragment>
        {
          new Input({
            className: 'chat-form__input',
            name: 'user-message',
            placeholder: 'Message...',
            validationPatterns: [VALIDATION_PATTERNS.NOT_EMPTY],
          })
        }
      </Fragment>
      <button className="chat-form__button" type="submit" title="Send message">
        <img
          className="chat-form__button-icon"
          src="/icons/send-2.svg"
          alt="Send"
          width="50"
          height="50"
          loading="lazy"
          aria-label="Send message"
        />
      </button>
    </form>
  )
}

export default ChatForm
