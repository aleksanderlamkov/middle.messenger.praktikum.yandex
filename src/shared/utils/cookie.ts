type TOptions = Record<string, any> & {
  expires?: number | Date | string
}

const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/([$?*|{}\]\\^])/g, '\\$1')}=([^;]*)`)
  )

  return matches ? decodeURIComponent(matches[1]) : undefined
}

/* eslint-disable */
const setCookie = (name: string, value: any, options: TOptions = {}) => {
  let { expires } = options
  if (typeof expires === 'number' && expires) {
    const d = new Date()
    d.setTime(d.getTime() + expires * 1000)
    expires = options.expires = d
  }
  if (expires && (expires as Date).toUTCString) {
    options.expires = (expires as Date).toUTCString()
  }
  value = encodeURIComponent(value.toString())
  let updatedCookie = `${name}=${value}`
  for (const propName in options) {
    updatedCookie += `; ${propName}`
    const propValue = options[propName]
    if (propValue !== true) {
      updatedCookie += `=${propValue}`
    }
  }
  document.cookie = updatedCookie
}

const removeCookie = (name: string) => {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}

export { getCookie, setCookie, removeCookie }
