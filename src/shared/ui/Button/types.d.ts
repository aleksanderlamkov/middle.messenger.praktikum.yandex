import { Event } from 'shared/types'

export type TClick = (event: Event<HTMLButtonElement>) => void

export type TButton = {
  className?: string
  label: string
  content?: any
  type?: 'button' | 'submit' | 'reset'
  events?: {
    click?: TClick
  }
}
