import jsxToDOM from 'jsxToDOM'
import Header from '../widgets/header'
import Footer from '../widgets/footer'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'
import ChatPage from '../pages/ChatPage'
import ProfilePage from '../pages/ProfilePage'
import Error404Page from '../pages/Error404Page'
import Error5XXPage from '../pages/Error5XXPage'

const App = () => {
  return (
    <div className="app">
      <Header className="app__header" />
      <main className="app__content container">
        {/*<SignInPage />*/}
        {/*<SignUpPage />*/}
        {/*<ChatPage />*/}
        <ProfilePage />
        {/*<Error404Page />*/}
        {/*<Error5XXPage />*/}
      </main>
      <Footer />
    </div>
  )
}

export default App
