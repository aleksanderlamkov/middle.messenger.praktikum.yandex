// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import chatsServices from 'shared/services/chatsServices'
import usersServices from 'shared/services/usersServices'
import { TUser } from 'shared/types/user'
import { TManageUsersModal, TManageUsersModalPublic } from './types'
import UI from './ui'

class ManageUsersModal extends Block<TManageUsersModal> {
  constructor(props: TManageUsersModalPublic) {
    super(UI, {
      ...props,
      onAddUserFormSubmit: (event: SubmitEvent) =>
        this.handleAddUserFormSubmit(event),
      onAddUserItemButtonClick: (user: TUser, isAdd: boolean) =>
        this.handleAddUserItemButtonClick(user, isAdd),
      onAddSelectedUsersButtonClick: () =>
        this.handleAddSelectedUsersButtonClick(),
      onAddedUserRemoveButtonClick: (userId: TUser['id']) =>
        this.handleAddedUserRemoveButtonClick(userId),
    })

    this.updateAddedUsers()

    return this.render()
  }

  handleAddUserFormSubmit(event: SubmitEvent) {
    event.preventDefault()

    const formNode = event.target as HTMLFormElement
    const formData = new FormData(formNode)
    const login = formData.get('login') as string
    const clearLogin = login.trim()

    if (login) {
      usersServices
        .getUsers(clearLogin)
        .then((users = []) => {
          this.setProps({ addUsersList: users })
        })
        .catch(alert)
    }
  }

  handleAddUserItemButtonClick(user: TUser, isReadyToAdd: boolean) {
    const { usersToAddList = [] } = this.props

    if (isReadyToAdd) {
      const newUsersToAddList = usersToAddList.filter(
        (userToAdd: TUser) => userToAdd.id !== user.id
      )

      this.setProps({ usersToAddList: newUsersToAddList })
    } else {
      this.setProps({ usersToAddList: [...usersToAddList, user] })
    }
  }

  handleAddSelectedUsersButtonClick() {
    const { usersToAddList, chatId, onCloseManageUsersModalButtonClick } =
      this.props

    chatsServices
      .addUsers({
        users: (usersToAddList as TUser[]).map(({ id }) => id),
        chatId,
      })
      .then(() => {
        onCloseManageUsersModalButtonClick()
      })
      .catch(alert)
  }

  handleAddedUserRemoveButtonClick(userId: TUser['id']) {
    chatsServices
      .deleteUserFromChat({
        users: [userId],
        chatId: this.props.chatId,
      })
      .then(() => this.updateAddedUsers())
  }

  updateAddedUsers() {
    chatsServices.getChatUsers(this.props.chatId).then((addedUsers = []) => {
      this.setProps({ addedUsers })
    })
  }
}

export default ManageUsersModal
