import HTTPTransport, { jsonHeaders } from 'shared/utils/HTTPTransport'
import { TChatsService } from './types'

const BASE_URL = 'https://ya-praktikum.tech/api/v2/chats'

const chatsServices: TChatsService = {
  getAll: async () => {
    return HTTPTransport.get(BASE_URL).then(({ response }) => response)
  },
  createChat: async (title) => {
    return HTTPTransport.post(BASE_URL, {
      data: JSON.stringify({ title }),
    }).then(({ response }) => response)
  },
  deleteChat: async (chatId) => {
    return HTTPTransport.delete(BASE_URL, {
      data: JSON.stringify({ chatId }),
      headers: jsonHeaders,
    }).then(({ response }) => response)
  },
  getById: async (id) => {
    return HTTPTransport.get(`${BASE_URL}/${id}/common`).then(
      ({ response }) => response
    )
  },
  addUsers: async (data) => {
    return HTTPTransport.put(`${BASE_URL}/users`, {
      data: JSON.stringify(data),
      headers: jsonHeaders,
    }).then(({ response }) => response)
  },
  deleteUserFromChat: async (data) => {
    return HTTPTransport.delete(`${BASE_URL}/users`, {
      data: JSON.stringify(data),
      headers: jsonHeaders,
    }).then(({ response }) => response)
  },
  getChatUsers: async (chatId) => {
    return HTTPTransport.get(`${BASE_URL}/${chatId}/users`, {}).then(
      ({ response }) => response
    )
  },
  getToken: async (chatId) => {
    return HTTPTransport.post(`${BASE_URL}/token/${chatId}`, {}).then(
      ({ response }) => response
    )
  },
  getUnreadMessagesCount: async (chatId) => {
    return HTTPTransport.get(`${BASE_URL}/new/${chatId}`, {}).then(
      ({ response }) => response
    )
  },
}

export default chatsServices
