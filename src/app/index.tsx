// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Header from 'widgets/Header'
import Footer from 'widgets/Footer'
import Router, { routes } from 'pages'
import Fragment from 'shared/ui/Fragment'
import Error404Page from '../pages/Error404Page'

const App = () => {
  return (
    <div className="app">
      <Header className="app__header" />
      <main className="app__content container">
        <Fragment>{new Router({ routes, errorPage: Error404Page })}</Fragment>
      </main>
      <Footer />
    </div>
  )
}

export default App
