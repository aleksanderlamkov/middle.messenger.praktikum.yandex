import { TChatPreviewCard } from './components/ChatPreviewCard/types'
import { TChatMessage } from './components/ChatMessage/types'

export type TChatPanel = {
  chatPreviewItems?: TChatPreviewCard[]
  currentDialog: {
    title: string
    avatarSrc?: string
    messages: TChatMessage[]
  }
}
