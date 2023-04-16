export type TRoute = {
  path: string
  element: () => JSX.Element
  isPrivate?: boolean
}

export type TRouter = {
  routes: TRoute[]
  errorPage: () => JSX.Element
  currentPath?: string
}
