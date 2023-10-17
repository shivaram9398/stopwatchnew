import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0, sec: 0, min: 0, disable: true}

  start = () => {
    this.timerID = setInterval(this.tick, 1000)
    this.setState({disable: false})
  }

  stop = () => {
    clearInterval(this.timerID)
    this.setState({disable: true})
  }

  reset = () => {
    clearInterval(this.timerID)
    this.setState({min: 0, time: 0, sec: 0, disable: true})
  }

  tick = () => {
    const {time} = this.state
    const d = time % 60
    console.log(d)
    if (time > 60) {
      this.setState(prev => ({
        min: Math.floor(prev.time / 60),
        time: prev.time + 1,
        sec: prev.time % 60,
      }))
    } else {
      this.setState(prev => ({
        min: Math.floor(prev.time / 60),
        time: prev.time + 1,
        sec: prev.time % 60,
      }))
    }
  }

  render() {
    const {sec, min, disable} = this.state

    const minutes = min > 9 ? min : `0${min}`
    const seconds = sec > 9 ? sec : `0${sec}`

    return (
      <div className="bg-container">
        <div className="container">
          <h1>Stopwatch</h1>

          <div className="time">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="para">Timer</p>
            </div>
            <h1>
              {minutes}:{seconds}
            </h1>
            <div className="btn-con">
              {disable ? (
                <button
                  className="btn green"
                  onClick={this.start}
                  type="button"
                >
                  Start
                </button>
              ) : (
                <button
                  className="btn green"
                  onClick={this.start}
                  type="button"
                  disabled
                >
                  Start
                </button>
              )}
              <button className="btn red" onClick={this.stop} type="button">
                Stop
              </button>
              <button className="btn yellow" onClick={this.reset} type="button">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
