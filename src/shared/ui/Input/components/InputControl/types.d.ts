export type TInputControlFocus = Function
export type TInputControlBlur = Function

export type TInputControl = {
  name: string
  type?: string
  placeholder?: string
  value?: string
  events: {
    focus?: TInputControlFocus
    blur?: TInputControlBlur
  }
}
