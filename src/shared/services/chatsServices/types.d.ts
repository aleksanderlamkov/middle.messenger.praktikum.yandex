import { TUser, TUserWithRole } from 'shared/types/user'
import { TChatMessage } from 'widgets/ChatPanel/components/ChatMessage/types'

export type TChat = {
  avatar: null | string
  created_by: number
  title: string
  id: number
  unread_count?: number
  last_message?: Pick<TChatMessage, 'content' | 'id' | 'time'> & {
    user: Omit<TUser, 'id'>
  }
}

export type TManageChatUsers = {
  users: number[]
  chatId: number
}

export type TChatsService = {
  getAll: () => Promise<TChat[]>
  createChat: (title: string) => Promise<unknown>
  deleteChat: (chatId: number) => Promise<unknown>
  getById: (chatId: number) => Promise<TChat>
  addUsers: (data: TManageChatUsers) => Promise<unknown>
  getChatUsers: (chatId: number) => Promise<TUserWithRole[]>
  deleteUserFromChat: (data: TManageChatUsers) => Promise<unknown>
  getToken: (chatId: number) => Promise<{ token: string }>
  getUnreadMessagesCount: (chatId: number) => Promise<{ unread_count: number }>
}
