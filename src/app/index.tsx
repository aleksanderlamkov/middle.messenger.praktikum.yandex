// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Header from '../widgets/Header'
import Footer from '../widgets/Footer'
import Router from '../pages'
import Fragment from '../shared/ui/Fragment'

const App = () => {
  return (
    <div className="app">
      <Header className="app__header" />
      <main className="app__content container">
        <Fragment>
          {new Router({})}
        </Fragment>
      </main>
      <Footer />
    </div>
  )
}

export default App
