export type TChatForm = {
  events?: {
    submit?: Function
  }
  onSendMessage: (message: string) => void
}
