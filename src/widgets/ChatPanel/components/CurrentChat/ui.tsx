// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Tooltip from 'shared/ui/Tooltip'
import Fragment from 'shared/ui/Fragment'
import Button from 'shared/ui/Button'
import ChatMessages from 'widgets/ChatPanel/components/ChatMessages'
import ChatForm from 'widgets/ChatPanel/components/ChatForm'
import defaultAvatarSrc from 'assets/images/avatar-placeholder.jpg'
import horizontalDotsImgSrc from 'assets/icons/horizontal-dots.svg'
import { TCurrentChat } from './types'
import './CurrentChat.pcss'

const CurrentChat = (props: TCurrentChat) => {
  const {
    avatar,
    title,
    onManageUsersButtonClick,
    onDeleteChatButtonClick,
    onSendMessage,
    messages,
  } = props

  const avatarImgSrc = avatar
    ? `https://ya-praktikum.tech/api/v2/resources/${avatar}`
    : defaultAvatarSrc

  return (
    <div className="current-chat">
      <header className="current-chat__header">
        <img
          className="current-chat__avatar"
          src={avatarImgSrc}
          alt={`Avatar of ${title}`}
          width="50"
          height="50"
          loading="lazy"
        />
        <h2 className="current-chat__title">{title}</h2>
        <Tooltip
          buttonContent={
            <img
              src={horizontalDotsImgSrc}
              alt=""
              width="24"
              height="24"
              loading="lazy"
            />
          }
          bodyContent={
            <div className="current-chat__actions">
              <ul className="current-chat__actions-list">
                <li className="current-chat__actions-item">
                  <Fragment>
                    {
                      new Button({
                        label: 'Manage users',
                        events: {
                          click: onManageUsersButtonClick,
                        },
                      })
                    }
                  </Fragment>
                </li>
                <li className="current-chat__actions-item">
                  <Fragment>
                    {
                      new Button({
                        label: 'Delete chat',
                        events: {
                          click: onDeleteChatButtonClick,
                        },
                      })
                    }
                  </Fragment>
                </li>
              </ul>
            </div>
          }
        />
      </header>
      <div className="current-chat__body">
        <Fragment>{new ChatMessages({ messages })}</Fragment>
        <Fragment>{new ChatForm({ onSendMessage })}</Fragment>
      </div>
    </div>
  )
}

export default CurrentChat
