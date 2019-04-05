import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import JokeGenerator from './components/JokeGenerator';
import History from './components/History';
import Navbar from './components/Navbar';
require('./styles/main.css');

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.getNewJoke}>New Joke</button> */}
        <Navbar />
        <Router className='main-content'>
          <JokeGenerator path='/' />
          <History path='/history' />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));