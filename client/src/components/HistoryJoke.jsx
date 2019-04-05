import React, { Component } from 'react';
require('../styles/joke.css');

class HistoryJoke extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { joke } = this.props;

    return (
      <div className='history-joke-text-container'>
        <span className='joke-text'>
          {joke}
        </span>
      </div>
    );
  }
}

export default HistoryJoke;