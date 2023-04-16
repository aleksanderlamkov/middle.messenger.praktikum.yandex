// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from 'shared/ui/Fragment'
import Form from 'shared/ui/Form'
import Input from 'shared/ui/Input/ui'
import ButtonUI from 'shared/ui/Button/ui'
import Modal from 'shared/ui/Modal'
import { TCreateChatModal } from './types'

const CreateChatModal = (props: TCreateChatModal) => {
  const { onCloseCreateChatModalButtonClick, onCreateChatFormSubmit } = props

  return (
    <Modal
      title="Create chat"
      onCloseButtonClick={onCloseCreateChatModalButtonClick}
    >
      <Fragment>
        {
          new Form({
            className: 'chat-panel__modal-form',
            content: (
              <Fragment>
                <Input
                  className="chat-panel__modal-form-input"
                  name="title"
                  placeholder="Enter a chat title"
                />
                <ButtonUI type="submit" label="Create" />
              </Fragment>
            ),
            events: { submit: onCreateChatFormSubmit },
          })
        }
      </Fragment>
    </Modal>
  )
}

export default CreateChatModal
