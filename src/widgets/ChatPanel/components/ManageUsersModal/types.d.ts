import { TClick } from 'shared/ui/Button/types'
import { TUser, TUserWithRole } from 'shared/types/user'

export type TManageUsersModalPublic = {
  onCloseManageUsersModalButtonClick: TClick
  chatId: number
}

export type TManageUsersModal = {
  onAddUserFormSubmit: SubmitEvent
  addUsersList: TUser[]
  usersToAddList: TUser[]
  onAddUserItemButtonClick: (user: TUser, isAdd: boolean) => void
  onAddSelectedUsersButtonClick: TClick
  addedUsers?: TUserWithRole[]
  onAddedUserRemoveButtonClick: (userId: TUser['id']) => void
}
