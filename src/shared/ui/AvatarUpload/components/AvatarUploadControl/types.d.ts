export type TAvatarUploadControlOnChange = (event: Event) => void

export type TAvatarUploadControl = {
  id?: string
  name?: string
  events?: {
    change?: TAvatarUploadControlOnChange
  }
}
