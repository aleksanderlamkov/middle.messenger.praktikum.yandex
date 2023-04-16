// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import { TRouter } from './types'

const Router = (props: TRouter) => {
  const { routes, errorPage, currentPath } = props

  const Page =
    routes.find(({ path }) => path === currentPath)?.element ?? errorPage

  return <Page />
}

export default Router
