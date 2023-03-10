import jsxToDOM from 'jsxToDOM'
import Fragment from '../../shared/ui/fragment'
import PageHeader from '../../shared/ui/page-header'
// import ChatPanel from '../../widgets/chat-panel/ui'
import ChatPanel from '../../widgets/chat-panel'
import Counter from '../../shared/ui/counter'
import { TChatPanel } from '../../widgets/chat-panel/types'

const chatProps: TChatPanel = {
  chatPreviewItems: [
    {
      title: 'Aleksander Lamkov',
      date: '12 Apr 2020',
      isUserReply: true,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea eos excepturi nulla saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
    {
      title: 'Aleksander Lamkov',
      date: '12 Apr 2020',
      isUserReply: true,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea eos excepturi nulla saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
    {
      title: 'Aleksander Lamkov',
      date: '12 Apr 2020',
      isUserReply: true,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea eos excepturi nulla saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
    {
      title: 'Aleksander Lamkov',
      date: '12 Apr 2020',
      isUserReply: true,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea eos excepturi nulla saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
    {
      title: 'Aleksander Lamkov',
      date: '12 Apr 2020',
      isUserReply: true,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea eos excepturi nulla saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
    {
      title: 'Aleksander Lamkov',
      date: '12 Apr 2020',
      isUserReply: true,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea eos excepturi nulla saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
    {
      title: 'Aleksander Lamkov',
      date: '12 Apr 2020',
      isUserReply: true,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea eos excepturi nulla saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
    {
      title: 'Aleksander Lamkov',
      date: '12 Apr 2020',
      isUserReply: true,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea eos excepturi nulla saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
  ],
  currentDialog: {
    title: 'Aleksander Lamkov',
    messages: [
      {
        text: 'Hi! What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today?',
        date: '12 Apr 2020',
      },
      {
        text: 'Hi! What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today?',
        date: '12 Apr 2020',
      },
      {
        text: 'Hi! What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today?',
        date: '12 Apr 2020',
        isUserReply: true,
        isSend: true,
        isRead: true,
      },
      {
        text: 'Hi! What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today?',
        date: '12 Apr 2020',
        isUserReply: true,
        isSend: true,
        isRead: false,
      },
    ]
  },
}

const ChatPage = () => {
  return (
    <Fragment>
      <PageHeader title="Chats" />
      <ChatPanel {...chatProps} />
      {/*{new ChatPanel(chatProps)}*/}
      {/*{new Counter({ value: 1 })}*/}
    </Fragment>
  )
}

export default ChatPage
