export type TRouterLink = {
  className?: string
  href: string
  content: any
  ariaLabel?: string
  isActive?: boolean
  events?: {
    click: (event: Event) => void
  }
}
