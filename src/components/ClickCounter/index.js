// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  handleIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1>
          {/* The button has clicked  times */}
          The Button has been clicked <span>{count}</span> times
        </h1>
        <p>Click the button to increase the count</p>
        <button onClick={this.handleIncrement} type="button">
          Click me{' '}
        </button>
      </div>
    )
  }
}
export default ClickCounter
