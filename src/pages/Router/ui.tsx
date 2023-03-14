// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import { TRouter } from './types'

const Router = (props: TRouter) => {
  const { pages, errorPage, currentPath } = props

  const Page =
    pages.find(({ path }) => path === currentPath)?.element ?? errorPage

  return <Page />
}

export default Router
