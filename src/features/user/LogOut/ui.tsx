// @ts-ignore
import jsxToDOM from 'jsxToDOM'
import Fragment from 'shared/ui/Fragment'
import Button from 'shared/ui/Button'
import { TLogOut } from './types'

const LogOut = (props: TLogOut) => {
  const { onClick } = props

  return (
    <Fragment>
      {
        new Button({
          label: 'Logout',
          events: { click: onClick },
        })
      }
    </Fragment>
  )
}

export default LogOut
