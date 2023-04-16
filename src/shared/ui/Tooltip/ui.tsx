// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from 'shared/utils/classNames'
import { TTooltip } from './types'
import './Tooltip.pcss'

const Tooltip = (props: TTooltip) => {
  const { className = '', buttonContent, bodyContent } = props

  return (
    <div className={classNames(className, 'tooltip')}>
      <button className="tooltip__button" type="button">
        {buttonContent}
      </button>
      <div className="tooltip__body">{bodyContent}</div>
    </div>
  )
}

export default Tooltip
