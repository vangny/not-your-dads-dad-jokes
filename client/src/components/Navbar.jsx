import React, { Component } from 'react';
import { Router, Link } from '@reach/router';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}

export default Navbar;