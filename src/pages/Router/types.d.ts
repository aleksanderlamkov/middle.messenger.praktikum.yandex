export type TPage = {
  path: string
  element: () => JSX.Element
}

export type TRouter = {
  pages: TPage[]
  errorPage: () => JSX.Element
  currentPath?: string
}
