const bubble = <TDetail extends unknown> (
  target: HTMLElement = document.documentElement,
  name: string,
  detail: TDetail,
): void => {
  const event = new CustomEvent(name, {
    detail,
    cancelable: true,
    bubbles: true,
  })

  target.dispatchEvent(event)
}

export default bubble
