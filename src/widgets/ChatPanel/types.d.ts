import { TChat } from 'shared/services/chatsServices/types'
import { TClick } from 'shared/ui/Button/types'
import { TManageUsersModalPublic } from 'widgets/ChatPanel/components/ManageUsersModal/types'

export type TChatPanel = TManageUsersModalPublic & {
  chatPreviewItems?: TChat[]
  currentChat: TChat
  isCreateChatModalOpen?: boolean
  isManageUsersModalOpen?: boolean
  onCreateChatButtonClick: TClick
  onCloseCreateChatModalButtonClick: TClick
  onCreateChatFormSubmit: SubmitEvent
  onChatPreviewCardClick: (currentChat: TChat) => void
  onManageUsersButtonClick: TClick
  onDeleteChatButtonClick: TClick
  updateChatsPreview: () => void
}
