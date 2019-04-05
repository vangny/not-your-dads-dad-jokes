import React, { Component } from 'react';

class HistoryJoke extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { joke } = this.props;

    return (
      <div className='history-joke-container'>
        <div className='history-joke-text-container'>
          <span>
            {joke}
          </span>
        </div>
      </div>
    );
  }
}

export default HistoryJoke;