import { TChat } from 'shared/services/chatsServices/types'

export type TChatPreviewCard = TChat & {
  isUserReply?: boolean
  isActive?: boolean
  onClick: Function
}
