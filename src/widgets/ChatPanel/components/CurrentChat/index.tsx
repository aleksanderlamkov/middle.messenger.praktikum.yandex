// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import chatsServices from 'shared/services/chatsServices'
import authServices from 'shared/services/authServices'
import { TChatMessage } from 'widgets/ChatPanel/components/ChatMessage/types'
import { TCurrentChat, TCurrentChatPublic } from './types'
import UI from './ui'

class CurrentChat extends Block<TCurrentChat> {
  socket: WebSocket

  constructor(props: TCurrentChatPublic) {
    super(UI, {
      ...props,
      onSendMessage: (message: string) => this.handleSendMessage(message),
    })

    this.init()

    return this.render()
  }

  handleSendMessage(message: string) {
    this.socket.send(
      JSON.stringify({
        content: message,
        type: 'message',
      })
    )
  }

  initSocket(userId: number, chatId: number, token: string) {
    const url = `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`

    this.socket = new WebSocket(url)
    this.bindSocketEvents()
  }

  init() {
    Promise.all([
      chatsServices.getChatUsers(this.props.id),
      chatsServices.getToken(this.props.id),
      authServices.getCurrentUser(),
    ]).then(([chatUsers = [], { token }, user]) => {
      this.setProps({ chatUsers, currentUserId: user.id })
      this.initSocket(user.id, this.props.id, token)
    })
  }

  handleSocketOpen() {
    console.debug('Соединение установлено')

    this.socket.send(
      JSON.stringify({
        content: '0',
        type: 'get old',
      })
    )
  }

  handleSocketClose = (event: CloseEvent) => {
    if (event.wasClean) {
      console.debug('Соединение закрыто чисто')
    } else {
      console.debug('Обрыв соединения')
    }

    console.debug(`Код: ${event.code} | Причина: ${event.reason}`)
  }

  addMessages(data: TChatMessage | TChatMessage[]) {
    const { messages = [] } = this.props
    const isArray = Array.isArray(data)

    if (isArray) {
      const newMessages = data.map((item) => ({
        ...item,
        isUserReply: item.user_id === this.props.currentUserId,
      }))
      this.setProps({ messages: [...messages, ...newMessages.reverse()] })
    } else {
      const newMessage = {
        ...data,
        isUserReply: data.user_id === this.props.currentUserId,
      }

      this.setProps({ messages: [...messages, newMessage] })
    }

    this.scrollToChatEnd()
  }

  scrollToChatEnd = () => {
    const messagesNode = document.querySelector('.chat-panel__messages')
    if (!messagesNode) return

    messagesNode.scrollTop = messagesNode.scrollHeight
  }

  handleSocketMessage(event: MessageEvent) {
    const data = JSON.parse(event.data)

    this.addMessages(data as TChatMessage | TChatMessage[])
  }

  handleSocketError = (event: Event) => {
    // @ts-ignore
    alert(event.message)
  }

  bindSocketEvents() {
    this.socket.addEventListener('open', () => this.handleSocketOpen())
    this.socket.addEventListener('close', (event) =>
      this.handleSocketClose(event)
    )
    this.socket.addEventListener('message', (event) =>
      this.handleSocketMessage(event)
    )
    this.socket.addEventListener('error', (event) =>
      this.handleSocketError(event)
    )
  }
}

export default CurrentChat
