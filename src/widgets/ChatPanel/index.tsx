// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Block from 'shared/utils/generic/block'
import chatsServices from 'shared/services/chatsServices'
import { TChat } from 'shared/services/chatsServices/types'
import UI from './ui'
import { TChatPanel } from './types'

class ChatPanel extends Block<TChatPanel> {
  constructor(props: Partial<TChatPanel>) {
    super(UI, {
      ...props,
      onCreateChatButtonClick: () => this.handleCreateChatButtonClick(),
      onCloseCreateChatModalButtonClick: () =>
        this.handleCloseCreateChatModalButtonClick(),
      onCreateChatFormSubmit: (event: SubmitEvent) =>
        this.handleCreateChatFormSubmit(event),
      onChatPreviewCardClick: (currentChat: TChat) =>
        this.handleChatPreviewCardClick(currentChat),
      onManageUsersButtonClick: () => this.handleManageUsersButtonClick(),
      onCloseManageUsersModalButtonClick: () =>
        this.handleCloseAddUserModalButtonClick(),
      onDeleteChatButtonClick: () => this.handleDeleteChatButtonClick(),
      updateChatsPreview: () => this.updateChatsPreview(),
    })

    this.updateChatsPreview()
    return this.render()
  }

  updateChatsPreview() {
    chatsServices.getAll().then((chatPreviewItems) => {
      this.setProps({ chatPreviewItems })
    })
  }

  handleCreateChatButtonClick() {
    this.setProps({ isCreateChatModalOpen: true })
  }

  handleCloseCreateChatModalButtonClick() {
    this.setProps({ isCreateChatModalOpen: false })
  }

  handleCreateChatFormSubmit(event: SubmitEvent) {
    event.preventDefault()

    const formNode = event.target as HTMLFormElement
    const formData = new FormData(formNode)
    const title = formData.get('title') as string
    if (!title) return

    chatsServices
      .createChat(title)
      .then(() => {
        this.setProps({ isCreateChatModalOpen: false })
        this.updateChatsPreview()
      })
      .catch(alert)
  }

  handleChatPreviewCardClick(currentChat: TChat) {
    this.setProps({ currentChat })
  }

  handleManageUsersButtonClick() {
    this.setProps({ isManageUsersModalOpen: true })
  }

  handleCloseAddUserModalButtonClick() {
    this.setProps({ isManageUsersModalOpen: false })
  }

  handleDeleteChatButtonClick() {
    chatsServices.deleteChat(this.props.currentChat.id).then(() => {
      this.updateChatsPreview()
      this.setProps({ currentChat: undefined })
    })
  }
}

export default ChatPanel
