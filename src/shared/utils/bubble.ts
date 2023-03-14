const bubble = <TDetail extends unknown>(
  name: string,
  detail: TDetail,
  target: HTMLElement = document.documentElement
): void => {
  const event = new CustomEvent(name, {
    detail,
    cancelable: true,
    bubbles: true,
  })

  target.dispatchEvent(event)
}

export default bubble
