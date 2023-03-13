export type TRouterLink = {
  className?: string
  href: string
  content: any
  ariaLabel?: string
  events?: {
    click: (event: Event) => void
  }
}
