// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from 'shared/ui/Fragment'
import Form from 'shared/ui/Form'
import Input from 'shared/ui/Input/ui'
import ButtonUI from 'shared/ui/Button/ui'
import Modal from 'shared/ui/Modal'
import classNames from 'shared/utils/classNames'
import Button from 'shared/ui/Button'
import { TManageUsersModal, TManageUsersModalPublic } from './types'

const ManageUsersModal = (
  props: TManageUsersModal & TManageUsersModalPublic
) => {
  const {
    onCloseManageUsersModalButtonClick,
    onAddUserFormSubmit,
    addUsersList = [],
    onAddedUserRemoveButtonClick,
    usersToAddList = [],
    onAddUserItemButtonClick,
    onAddSelectedUsersButtonClick,
    addedUsers = [],
  } = props

  const hasAddUsers = addUsersList.length > 0
  const hasUsersToAdd = usersToAddList.length > 0

  const hasAddedUsers = addedUsers.length > 0

  return (
    <Modal
      title="Manage users"
      onCloseButtonClick={onCloseManageUsersModalButtonClick}
    >
      <Fragment>
        {hasAddedUsers && (
          <div className="chat-panel__added-users">
            <div className="chat-panel__added-users-title">Added users:</div>
            <ul className="chat-panel__added-users-list">
              {addedUsers.map(({ id, login }) => (
                <li className="chat-panel__added-users-item">
                  <div className="chat-panel__added-users-login">{login}</div>
                  <Fragment>
                    {
                      new Button({
                        className: 'chat-panel__added-users-remove-button',
                        label: 'Remove user',
                        content: (
                          <img
                            className="chat-form__button-icon"
                            src="/icons/cross.svg"
                            alt=""
                            width="16"
                            height="16"
                            loading="lazy"
                            title="Remove user"
                          />
                        ),
                        events: {
                          click: () => onAddedUserRemoveButtonClick(id),
                        },
                      })
                    }
                  </Fragment>
                </li>
              ))}
            </ul>
          </div>
        )}
        {
          new Form({
            className: 'chat-panel__modal-form',
            content: (
              <Fragment>
                <Input
                  className="chat-panel__modal-form-input"
                  name="login"
                  placeholder="Enter an user login"
                />
                <ButtonUI type="submit" label="Search" />
              </Fragment>
            ),
            events: { submit: onAddUserFormSubmit },
          })
        }
        {hasAddUsers && (
          <ul className="chat-panel__add-users-list">
            {addUsersList.map((user) => {
              const { login, id } = user

              const isAlreadyAdded = addedUsers?.some(
                (addedUser) => addedUser.id === id
              )
              if (isAlreadyAdded) return null
              const isReadyToAdd = usersToAddList.some(
                (userToAdd) => userToAdd.id === id
              )

              return (
                <li
                  className={classNames('chat-panel__add-users-item', {
                    'is-ready-to-add': isReadyToAdd,
                  })}
                >
                  <div className="chat-panel__add-users-login">{login}</div>
                  <Fragment>
                    {
                      new Button({
                        className: 'chat-panel__add-users-item-button',
                        label: isReadyToAdd ? 'Remove' : 'Add',
                        events: {
                          click: () =>
                            onAddUserItemButtonClick(user, isReadyToAdd),
                        },
                      })
                    }
                  </Fragment>
                </li>
              )
            })}
          </ul>
        )}
        {hasUsersToAdd && (
          <Fragment>
            {
              new Button({
                className: 'chat-panel__add-selected-users-button',
                label: 'Add selected users',
                events: {
                  click: onAddSelectedUsersButtonClick,
                },
              })
            }
          </Fragment>
        )}
      </Fragment>
    </Modal>
  )
}

export default ManageUsersModal
