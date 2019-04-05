import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import JokeGenerator from './components/JokeGenerator';
import History from './components/History';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.getNewJoke}>New Joke</button> */}
        <div className='navbar-container'>
          <div className='nav-logo-container'>
            <Link to='/'>
              <span>NYD Dad Jokes</span>
            </Link>
          </div>
          <div className='nav-home-container'>
            <Link to='/'>
              <span>Home</span>
            </Link>
          </div>
          <div className='nav-history-container'>
            <Link to='/history'>
              <span>History</span>
            </Link>
          </div>
        </div>
        <Router className='main-content'>
          <JokeGenerator path='/' />
          <History path='/history' />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));