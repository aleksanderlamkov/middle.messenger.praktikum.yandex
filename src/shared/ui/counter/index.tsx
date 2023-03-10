import Block from '../../utils/generic/block'
import jsxToDOM from 'jsxToDOM'
import UI from './ui'
import { TCounter } from './types'
import Button from '../button'

// class Counter extends Block<TCounter> {
//   constructor(props) {
//     const onClick = () => this.handleClick()
//
//     super(UI, {
//       ...props,
//       events: {
//         click: onClick,
//       }
//     })
//
//     return (
//       <div>
//         {this.render()}
//         <Button label="Click me" onClick={onClick} />
//       </div>
//     )
//   }
//
//   handleClick() {
//     this.setProps({ value: (this.props.value || 0) + 1 })
//   }
// }

class Counter extends Block<TCounter> {
  constructor(props) {
    const onClick = () => this.handleClick()

    const onInput = (event) => this.handleInput(event)

    super(UI, {
      ...props,
      events: {
        input: onInput,
        // click: onClick,
        // click: () => console.debug('s'),
      }
    })

    return this.render()
  }

  handleClick() {
    this.setProps({ value: (this.props.value || 0) + 1 })
  }

  handleInput(event) {
    const newValue = event.target.value

    console.debug('newValue', newValue)
    this.setProps({ value: newValue })
  }
}

export default Counter
