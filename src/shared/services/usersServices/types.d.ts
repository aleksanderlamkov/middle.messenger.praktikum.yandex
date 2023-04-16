import { TUser, TUserPassword } from 'shared/types/user'

export type TUserSent = Omit<TUser, 'id' | 'avatar'>

export type TPasswordChangeSent = {
  oldPassword: TUserPassword
  newPassword: TUserPassword
}

export type TUserService = {
  update: (data: TUserSent) => Promise<TUser>
  changeAvatar: (avatar: File) => Promise<TUser>
  changePassword: (data: TPasswordChangeSent) => Promise<unknown>
  getUsers: (login: string) => Promise<TUser[]>
}
