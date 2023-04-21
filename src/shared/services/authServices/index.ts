import HTTPTransport from 'shared/utils/HTTPTransport'
import { TAuthService } from './types'

const BASE_URL = 'https://ya-praktikum.tech/api/v2/auth'

const authServices: TAuthService = {
  signUp: async (data) => {
    return HTTPTransport.post(`${BASE_URL}/signup`, {
      data: JSON.stringify(data),
    }).then(({ response }) => response)
  },
  signIn: async (data) => {
    return HTTPTransport.post(`${BASE_URL}/signin`, {
      data: JSON.stringify(data),
    }).then(({ response }) => response)
  },
  getUserInfo: async () => {
    return HTTPTransport.get(`${BASE_URL}/user`).then(
      ({ response }) => response
    )
  },
  logOut: async () => {
    return HTTPTransport.post(`${BASE_URL}/logout`).then(
      ({ response }) => response
    )
  },
  getCurrentUser: async () => {
    return HTTPTransport.get(`${BASE_URL}/user`).then(
      ({ response }) => response
    )
  },
}

export default authServices
