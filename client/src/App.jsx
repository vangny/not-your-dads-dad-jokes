import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { Router, Link } from '@reach/router';

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
        {/* <button onClick={this.getNewJoke}>New Joke</button> */}
        <div className='navbar-container'>
          <span>Not Your Dad's Dad Jokes</span>
        </div>
        <Router className='main-content'>
        
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));