// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from 'shared/ui/Fragment'
import Button from 'shared/ui/Button'
import ChatPreviewCard from './components/ChatPreviewCard'
import { TChatPanel } from './types'
import CurrentChat from './components/CurrentChat'
import CreateChatModal from './components/CreateChatModal'
import ManageUsersModal from './components/ManageUsersModal'
import './ChatPanel.pcss'

const ChatPanel = (props: TChatPanel) => {
  const {
    chatPreviewItems = [],
    currentChat,
    isCreateChatModalOpen = false,
    isManageUsersModalOpen = false,
    onCreateChatButtonClick,
    onCloseCreateChatModalButtonClick,
    onCreateChatFormSubmit,
    onChatPreviewCardClick,
    onManageUsersButtonClick,
    onCloseManageUsersModalButtonClick,
    onDeleteChatButtonClick,
    updateChatsPreview,
  } = props

  const hasChatPreviewItems = chatPreviewItems.length > 0

  return (
    <Fragment>
      <div className="chat-panel">
        <div className="chat-panel__dialogs">
          <Fragment>
            {
              new Button({
                className: 'chat-panel__create-chat-button',
                label: 'Create chat',
                events: {
                  click: onCreateChatButtonClick,
                },
              })
            }
          </Fragment>
          {hasChatPreviewItems && (
            <ul className="chat-panel__dialogs-list">
              {chatPreviewItems.map((chatPreviewItem) => {
                return (
                  <li className="chat-panel__dialogs-item">
                    <Fragment>
                      {
                        new ChatPreviewCard({
                          ...chatPreviewItem,
                          isActive: currentChat?.id === chatPreviewItem.id,
                          onClick: () =>
                            onChatPreviewCardClick(chatPreviewItem),
                        })
                      }
                    </Fragment>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <div className="chat-panel__body">
          {currentChat ? (
            <Fragment>
              {
                new CurrentChat({
                  onManageUsersButtonClick,
                  onDeleteChatButtonClick,
                  ...currentChat,
                  updateChatsPreview,
                })
              }
            </Fragment>
          ) : (
            <div className="chat-panel__empty-chat-message">
              Select a chat from the list on the left to start chatting
            </div>
          )}
        </div>
      </div>

      {isCreateChatModalOpen && (
        <Fragment>
          {
            new CreateChatModal({
              onCloseCreateChatModalButtonClick,
              onCreateChatFormSubmit,
            })
          }
        </Fragment>
      )}

      {isManageUsersModalOpen && (
        <Fragment>
          {
            new ManageUsersModal({
              onCloseManageUsersModalButtonClick,
              chatId: currentChat.id,
            })
          }
        </Fragment>
      )}
    </Fragment>
  )
}

export default ChatPanel
