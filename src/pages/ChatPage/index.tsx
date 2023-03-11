// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from '../../shared/ui/fragment'
import PageHeader from '../../shared/ui/page-header'
import ChatPanel from '../../widgets/chat-panel'
import { TChatPanel } from '../../widgets/chat-panel/types'

const chatProps: TChatPanel = {
  chatPreviewItems: [
    {
      title: 'Aleksander Lamkov',
      date: '5 June 2020',
      isUserReply: true,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus equi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
    {
      title: 'Ivan Ivanov',
      date: '11:59',
      isUserReply: true,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eos excepturi nulla saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
    {
      title: 'OUT AMAZING PARTY!!11',
      date: '16:55',
      isUserReply: true,
      message:
        'Lorem ipsum dolor amet, consectetur elit. Accusamus ea eos excepturi nulla saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
    {
      title: 'BestMemes group',
      date: 'Yesterday, 23:59',
      isUserReply: true,
      message:
        'Lorem dolor sit amet, consectetur adipisicing elit. Accusamus ea eos excepturi nulla saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
    {
      title: 'Aleksander Aleksander',
      date: '11 Apr 2020',
      isUserReply: true,
      message:
        'Lorem ipsum dolor sit consectetur adipisicing elit. Accusamus ea eos excepturi nulla saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
    {
      title: 'Anonymous',
      date: '10 May 2020',
      isUserReply: true,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea eos excepturi saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
    {
      title: 'Aleksander',
      date: '12 Apr 2020',
      isUserReply: true,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea eos excepturi nulla saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
    {
      title: 'Petrov',
      date: '12 Apr 2020',
      isUserReply: true,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea eos excepturi nulla saepe sequi totam. Cupiditate expedita ipsa laudantium minus modi repudiandae sed velit veritatis voluptates. Dicta, dolorum saepe?',
      unreadMessages: 1,
    },
  ],
  currentDialog: {
    title: 'Vasya Pupkin',
    messages: [
      {
        text: 'Hi! What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today?',
        date: '10 Apr 2020',
      },
      {
        text: 'Hi! What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today?',
        date: '11 Apr 2020',
      },
      {
        text: 'Hi! What are you doing today? What are you doing today? What are you? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today?',
        date: '13 Apr 2020',
        isUserReply: true,
        isSend: true,
        isRead: true,
      },
      {
        text: 'Hi! What are you doing today? What are you doing today? What? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today? What are you doing today?',
        date: '15 Apr 2020',
        isUserReply: true,
        isSend: true,
        isRead: false,
      },
    ],
  },
}

const ChatPage = () => {
  return (
    <Fragment>
      <PageHeader title="Chats" />
      <ChatPanel {...chatProps} />
    </Fragment>
  )
}

export default ChatPage
