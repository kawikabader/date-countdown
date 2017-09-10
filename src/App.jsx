import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: 'October 31, 2017',
      newDeadline: '',
    };
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <div />
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl
          className="Deadline-input"  
            placeholder={this.state.deadline}
            onChange={event =>
              this.setState({ newDeadline: event.target.value })}
          />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
