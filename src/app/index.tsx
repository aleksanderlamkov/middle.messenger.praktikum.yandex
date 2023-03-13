// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Header from 'widgets/Header'
import Footer from 'widgets/Footer'
import Router from 'pages'
import Fragment from 'shared/ui/Fragment'
import { TPage } from '../pages/Router/types'
import ChatPage from '../pages/ChatPage'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'
import ProfilePage from '../pages/ProfilePage'
import Error404Page from '../pages/Error404Page'

const pages: TPage[] = [
  {
    path: '/',
    element: ChatPage,
  },
  {
    path: '/sign-in',
    element: SignInPage,
  },
  {
    path: '/sign-up',
    element: SignUpPage,
  },
  {
    path: '/profile',
    element: ProfilePage,
  },
]

const App = () => {
  return (
    <div className="app">
      <Header className="app__header" />
      <main className="app__content container">
        <Fragment>{new Router({ pages, errorPage: Error404Page })}</Fragment>
      </main>
      <Footer />
    </div>
  )
}

export default App
