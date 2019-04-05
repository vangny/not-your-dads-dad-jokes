import React, { Component } from 'react';
import HistoryJoke from './HistoryJoke';
require('../styles/history.css')

class History extends Component {
  constructor(props) {
    super(props);
    this.clearHistory = this.clearHistory.bind(this);
  }

  clearHistory() {
    localStorage.clear();
  }

  renderJokes() {
    let jokes = JSON.parse(localStorage.getItem('jokes'));

    if (!!jokes) {
      return (
        <div className='history-container not-empty'>
          <div className='history-jokes-container'>
            {jokes.map((joke) => <HistoryJoke joke={joke} />)}
          </div>
          <div className='history-button-container'>
            <button className='button-clear-history'>Clear History</button>
          </div>
        </div>
        
      );
    } else {
      return (
        <div className='history-container'>
          <div className='empty-container'>
            <span className='empty-paragraph'>
              It looks a little empty here 😐
            </span>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      this.renderJokes()
    );
  }
}

export default History;