import { expect } from 'chai'
import classNames from './classNames'

describe('classNames', () => {
  it('Concatenation of two strings', () => {
    expect(classNames('firstClass', 'secondClass')).equal(
      'firstClass secondClass'
    )
  })

  it('Concatenation of object values with conditions', () => {
    expect(
      classNames({
        firstClass: true,
        secondClass: false,
        thirdClass: true,
      })
    ).equal('firstClass thirdClass')
  })

  it('Concatenation of string and object values with conditions', () => {
    expect(
      classNames('baseClass', {
        extraClass: true,
        anotherExtraClass: false,
      })
    ).equal('baseClass extraClass')
  })
})
