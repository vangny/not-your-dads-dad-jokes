import React, { Component } from 'react';
import HistoryJoke from './HistoryJoke';
require('../styles/history.css')

class History extends Component {
  constructor(props) {
    super(props);
  }

  renderJokes() {
    let jokes = JSON.parse(sessionStorage.getItem('jokes'));

    if (!!jokes) {
      return (
        <div className='history-container'>
          {jokes.map((joke) => <HistoryJoke joke={joke} />)}
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