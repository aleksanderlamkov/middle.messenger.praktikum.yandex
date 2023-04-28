import { expect } from 'chai'
import Router from '.'

describe('Router', () => {
  it('Correct history state after navigation', () => {
    Router.navigateTo('/example', false)

    expect(history.state.name).equal('/example')
  })

  it('Correct history length after several navigations', () => {
    Router.navigateTo('/example-1', false)
    Router.navigateTo('/example-2', false)
    Router.navigateTo('/example-3', false)

    expect(history.length).equal(5)
  })
})
