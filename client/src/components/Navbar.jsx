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
        <Link className='nav-logo-container nav-item' to='/'>
          <div className='nav-logo'>
            <img className='logo-img' src={require('../../../images/nyddj-logo-38x50.png')}/>
            <span>Not Your Dad's Dad Jokes</span>
          </div>
          <div className='nav-logo-text'>
            
          </div>
        </Link>
        <Link className='nav-home-container nav-item' to='/'>
          <div>
            <span>Home</span>
          </div>
        </Link>
        <Link className='nav-history-container nav-item' to='/history'>
          <div>
            <span>History</span>
          </div> 
        </Link>
      </div>
    );
  }
}

export default Navbar;