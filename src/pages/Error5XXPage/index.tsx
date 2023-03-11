// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from '../../shared/ui/fragment'
import PageHeader from '../../shared/ui/page-header'

const Error5XXPage = () => {
  return (
    <PageHeader
      title={
        <Fragment>
          Ooops... Something went wrong :(
          <br />
          We&apos;ll fix it soon!
        </Fragment>
      }
    />
  )
}

export default Error5XXPage
