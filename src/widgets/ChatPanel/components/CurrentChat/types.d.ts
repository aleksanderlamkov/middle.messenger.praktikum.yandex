import { TChat } from 'shared/services/chatsServices/types'
import { TClick } from 'shared/ui/Button/types'
import { TChatForm } from 'widgets/ChatPanel/components/ChatForm/types'
import { TUserWithRole } from 'shared/types/user'
import { TChatMessage } from 'widgets/ChatPanel/components/ChatMessage/types'

export type TCurrentChatPublic = Pick<TChat, 'avatar' | 'title'> & {
  onManageUsersButtonClick: TClick
  onDeleteChatButtonClick: TClick
  updateChatsPreview: () => void
}

export type TCurrentChat = TCurrentChatPublic & {
  onSendMessage: TChatForm['onSendMessage']
  chatUsers: TUserWithRole[]
  messages: TChatMessage[]
  currentUserId: number
}
