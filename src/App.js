import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      percentage: 20
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log('hello! ' + process.env.PERCENTAGE);
    event.preventDefault();
    console.log(event.currentTarget);
    this.setState({
      percentage: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Example stress bar prototype, you can adjust the value and the bar
            changes in real time. I can get it set up where your mods can alter
            the value through the bot if given a little time.
          </p>

          <Progress
            percent={process.env.PERCENTAGE || this.state.percentage}
            status="success"
          />
          <form>
            <input
              type="number"
              name="percentage"
              onChange={this.handleChange}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
