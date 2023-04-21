// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import classNames from 'shared/utils/classNames'
import Fragment from 'shared/ui/Fragment'
import Button from 'shared/ui/Button'
import { TModal } from './types'
import './Modal.pcss'

const Modal = (props: TModal) => {
  const { className, title, children, onCloseButtonClick } = props

  return (
    <div className={classNames(className, 'modal')}>
      <div className="modal__inner">
        <header className="modal__header">
          {title && <div className="modal__title h2">{title}</div>}
          <Fragment>
            {
              new Button({
                className: 'modal__close-button',
                label: 'CLOSE',
                events: { click: onCloseButtonClick },
              })
            }
          </Fragment>
        </header>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  )
}

export default Modal
