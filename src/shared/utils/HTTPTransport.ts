import getStringifyData from './getStringifyData'

enum METHODS {
  GET = 'GET',
  POST =  'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type TUrl = string

type TOptions = {
  method?: METHODS,
  data?: any,
  headers?: Record<string, string>
}

class HTTPTransport {
  get(url: TUrl, options: TOptions = {}) {
    const { data } = options
    const urlFormatted = `${url}${getStringifyData(data)}`

    return this.request(urlFormatted, {
      ...options,
      method: METHODS.GET,
    })
  }

  post(url: TUrl, options = {}) {
    return this.request(url, {
      ...options,
      method: METHODS.POST,
    })
  }

  put(url: TUrl, options = {}) {
    return this.request(url, {
      ...options,
      method: METHODS.PUT,
    })
  }

  delete(url: TUrl, options = {}) {
    return this.request(url, {
      ...options,
      method: METHODS.DELETE,
    })
  }

  request = (url: TUrl, options: TOptions, timeout = 5000) => {
    const { method = 'GET', data, headers = {} } = options
    const isPostMethod = method === METHODS.POST
    const isPutMethod = method === METHODS.PUT

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()

      xhr.open(method, url)
      xhr.timeout = timeout

      Object
        .entries(headers)
        .forEach(([key, value]) => xhr.setRequestHeader(key, value))

      xhr.onload = () => resolve(xhr)
      xhr.onabort = reject
      xhr.onerror = reject
      xhr.ontimeout = reject

      if (isPostMethod || isPutMethod) {
        xhr.send(data)
      } else {
        xhr.send()
      }
    })
  };
}

export default HTTPTransport
