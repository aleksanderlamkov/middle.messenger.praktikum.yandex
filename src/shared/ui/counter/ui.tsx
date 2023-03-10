import jsxToDOM from 'jsxToDOM'
import { TCounter } from './types'
import './Counter.pcss'

const Counter = (props: TCounter) => {
  const { value } = props

  return (
    <input className="counter" type="text" name={value} />
  )

  // return (
  //   <div className="counter">
  //     <div className="counter__value">Value: {value}</div>
  //     <button className="counter__button" type="button">Increase</button>
  //     <input className="counter__input" />
  //   </div>
  // )
}

export default Counter
