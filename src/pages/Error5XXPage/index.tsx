import jsxToDOM from 'jsxToDOM'
import Fragment from '../../shared/ui/fragment'
import PageHeader from '../../shared/ui/page-header'

const Error5XXPage = () => {
  return (
    <Fragment>
      <PageHeader
        title={(
          <Fragment>
            Ooops... Something went wrong :(<br/>We'll fix it soon!
          </Fragment>
        )}
      />
    </Fragment>
  )
}

export default Error5XXPage
