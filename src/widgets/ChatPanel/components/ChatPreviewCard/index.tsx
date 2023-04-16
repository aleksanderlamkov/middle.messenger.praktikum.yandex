// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import chatsServices from 'shared/services/chatsServices'
import UI from './ui'
import { TChatPreviewCard } from './types'

class ChatPreviewCard extends Block<TChatPreviewCard> {
  constructor(props: TChatPreviewCard) {
    super(UI, {
      ...props,
      events: {
        click: () => this.handleClick(),
      },
    })

    this.updateUnreadCount()

    return this.render()
  }

  updateUnreadCount() {
    chatsServices
      .getUnreadMessagesCount(this.props.id)
      .then(({ unread_count }) => {
        console.debug('unread_count:', unread_count)
      })
  }

  handleClick() {
    const { onClick, title, id } = this.props

    onClick({
      title,
      id,
    })
  }
}

export default ChatPreviewCard
