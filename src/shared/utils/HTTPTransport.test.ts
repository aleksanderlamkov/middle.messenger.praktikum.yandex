import { assert, expect } from 'chai'
import HTTPTransport, { jsonHeaders } from './HTTPTransport'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

describe('HTTPTransport (requests via XMLHttpRequest)', () => {
  it('GET', () => {
    return HTTPTransport.get(`${BASE_URL}/todos/1`)
      .then(({ responseText }) => JSON.parse(responseText))
      .then((response) => {
        assert.deepEqual(response, {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        })
      })
  })

  it('POST', async () => {
    const sentData = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }

    return HTTPTransport.post(`${BASE_URL}/posts`, {
      data: JSON.stringify(sentData),
    })
      .then(({ responseText }) => JSON.parse(responseText))
      .then((response) => {
        const responseWithoutId = { ...response }
        delete responseWithoutId.id

        assert.deepEqual(responseWithoutId, sentData)
      })
  })

  it('PUT', async () => {
    const sentData = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }

    return HTTPTransport.put(`${BASE_URL}/posts/1`, {
      data: JSON.stringify(sentData),
      headers: jsonHeaders,
    })
      .then(({ responseText }) => JSON.parse(responseText))
      .then((response) => {
        assert.deepEqual(response, sentData)
      })
  })

  it('DELETE', async () => {
    return HTTPTransport.delete(`${BASE_URL}/posts/1`).then(({ status }) => {
      expect(status).equal(200)
    })
  })
})
