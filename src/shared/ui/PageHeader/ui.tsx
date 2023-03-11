// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from '../../utils/classNames'
import { TPageHeader } from './types'
import './PageHeader.pcss'

const PageHeader = (props: TPageHeader) => {
  const { className = '', title } = props

  return (
    <div className={classNames(className, 'PageHeader')}>
      <h1 className="page-header__title">{title}</h1>
    </div>
  )
}

export default PageHeader
