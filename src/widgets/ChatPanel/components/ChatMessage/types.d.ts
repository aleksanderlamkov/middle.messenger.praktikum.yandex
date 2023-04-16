export type TChatMessage = {
  content: string
  id: number
  time: string
  type: string
  user_id: number
  isUserReply?: boolean
}
