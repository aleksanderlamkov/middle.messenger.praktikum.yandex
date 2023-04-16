const wait = (ms = 1000): Promise<unknown> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export default wait
