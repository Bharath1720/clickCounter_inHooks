import './index.css'
// Write your code here
import {useState} from 'react'

const ClickCounterFunctional = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div className="main-container">
      <h1>
        {/* The button has clicked  times */}
        The Button has been clicked <span>{count}</span> times
      </h1>
      <p>Click the button to increase the count</p>
      <button onClick={onIncrement} type="button">
        Click me{' '}
      </button>
    </div>
  )
}
export default ClickCounterFunctional
