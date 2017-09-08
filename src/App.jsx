import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: 'December 24, 2017'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
          </div>
        <div>
          <div className="Clock-days">14 days</div>
          <div className="Clock-hours">4 hours</div>
          <div className="Clock-minutes">5 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeholder="new date" />
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
