export type TPattern = {
  regExp: RegExp
  message: string
}

export type TPatterns = {
  [key: string]: TPattern
}
