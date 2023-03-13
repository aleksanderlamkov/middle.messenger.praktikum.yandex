export type TPage = {
  path: string
  element: () => JSX.Element
}

export type TRouter = {
  currentPath?: string
}
