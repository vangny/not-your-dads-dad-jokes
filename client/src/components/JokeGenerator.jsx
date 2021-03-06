import React, { Component } from 'react';
import axios from 'axios';
require('../styles/generator.css');

class JokeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: null,
    }
    
    this.getNewJoke = this.getNewJoke.bind(this);
  }

  getNewJoke() {
    axios.get('/api/dad-jokes')
      .then((response) => {
        this.setState({
          joke: response.data,
        }, () => {
          const { joke } = this.state;
          let jokes = JSON.parse(localStorage.getItem('jokes'));
          if (!!jokes) {
            jokes.push(joke);
            localStorage.setItem('jokes', JSON.stringify(jokes));
          } else {
            let newJokes = [joke];
            localStorage.setItem('jokes', JSON.stringify(newJokes))
          }
        });
      });
  }

  renderJoke() {
    const { joke } = this.state;

    if (!!joke) {
      return(
        <p>{joke}</p>
      );
    } else {
      return (
        <p>Go ahead and generate a dad joke!</p>
      );
    }
  }

  render() {
    return (
      <div className='joke-container'>
        <div className='joke-text-container'>
          {this.renderJoke()}
        </div>
        <div className='joke-button-container'>
          <button className='button-generate-joke' onClick={this.getNewJoke}>Generate A Joke</button>
        </div>
      </div>
    );
  }
}

export default JokeGenerator;