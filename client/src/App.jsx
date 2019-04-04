import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.getNewJoke = this.getNewJoke.bind(this);
  }

  getNewJoke() {
    axios.get('/api/dad-jokes')
      .then((response) => console.log(response.data));
  }

  render() {
    return (
      <div>
        <button onClick={this.getNewJoke}>Hi World</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));