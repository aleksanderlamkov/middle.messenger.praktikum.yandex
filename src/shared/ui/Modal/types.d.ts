import { TClick } from 'shared/ui/Button/types'

export type TModal = {
  className?: string
  title?: string
  children?: any
  onCloseButtonClick: TClick
}
