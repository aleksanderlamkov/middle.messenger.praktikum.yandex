import { TUser, TUserPassword } from 'shared/types/user'

type TReason = string

type TSignUpSent = Omit<TUser, 'id' | 'avatar' | 'display_name'> & {
  password: TUserPassword
}

export type TSignUpResponse = TSignUpSent & {
  id?: TUser['id']
  reason?: TReason
}

type TSignInSent = {
  login: TUser['login']
  password: TUserPassword
}

export type TGetUserInfoResponse = TUser & {
  reason?: TReason
}

export type TAuthService = {
  signUp: (data: TSignUpSent) => Promise<TSignUpResponse>
  signIn: (data: TSignInSent) => Promise<unknown>
  getUserInfo: () => Promise<TGetUserInfoResponse>
  logOut: () => Promise<unknown>
  getCurrentUser: () => Promise<TUser>
}
