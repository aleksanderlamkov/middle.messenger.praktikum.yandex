// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from 'shared/ui/Fragment'
import PageHeader from 'shared/ui/PageHeader'
import ChatPanel from 'widgets/ChatPanel'

const ChatPage = () => {
  return (
    <Fragment>
      <PageHeader title="Chats" />
      <Fragment>{new ChatPanel({})}</Fragment>
    </Fragment>
  )
}

export default ChatPage
