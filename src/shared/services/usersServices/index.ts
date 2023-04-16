import HTTPTransport, { jsonHeaders } from 'shared/utils/HTTPTransport'
import { TUserService } from './types'

const BASE_URL = 'https://ya-praktikum.tech/api/v2/user'

const usersServices: TUserService = {
  update: async (data) => {
    return HTTPTransport.put(`${BASE_URL}/profile`, {
      data: JSON.stringify(data),
      headers: jsonHeaders,
    }).then(({ response }) => response)
  },
  changeAvatar: async (file) => {
    const formData = new FormData()
    formData.append('avatar', file)

    return HTTPTransport.put(`${BASE_URL}/profile/avatar`, {
      data: formData,
    }).then(({ response }) => response)
  },
  changePassword: async (data) => {
    return HTTPTransport.put(`${BASE_URL}/password`, {
      data: JSON.stringify(data),
      headers: jsonHeaders,
    }).then(({ response }) => response)
  },
  getUsers: async (login) => {
    return HTTPTransport.post(`${BASE_URL}/search`, {
      data: JSON.stringify({ login }),
      headers: jsonHeaders,
    }).then(({ response }) => response)
  },
}

export default usersServices
