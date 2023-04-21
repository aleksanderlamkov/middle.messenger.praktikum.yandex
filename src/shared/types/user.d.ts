export type TUser = {
  id: number
  first_name: string
  second_name: string
  display_name: string | null
  login: string
  email: string
  phone: string
  avatar: string | null
}

export type TUserWithRole = TUser & {
  role?: 'admin'
}

export type TUserPassword = string
