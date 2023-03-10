// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from '../../utils/classNames'
import { TPageHeader } from './types'
import './page-header.pcss'

const PageHeader = (props: TPageHeader) => {
  const {
    className = '',
    title,
  } = props

  return (
    <div className={classNames(className, 'page-header')}>
      <h1 className="page-header__title">
        {title}
      </h1>
    </div>
  )
}

export default PageHeader
