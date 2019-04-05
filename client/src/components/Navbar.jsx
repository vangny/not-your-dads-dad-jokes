import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
require('../styles/navbar.css');

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='navbar-container'>
        <Link className='nav-logo-container' to='/'>
          <div>
            <span>NYD Dad Jokes</span>
          </div>
        </Link>
        <Link className='nav-home-container' to='/'>
          <div>
            <span>Home</span>
          </div>
        </Link>
        <Link className='nav-history-container' to='/history'>
          <div>
            <span>History</span>
          </div> 
        </Link>
      </div>
    );
  }
}

export default Navbar;