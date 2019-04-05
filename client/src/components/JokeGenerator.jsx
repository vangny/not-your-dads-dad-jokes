import React, { Component } from 'react';

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
      <div>
        <div className='joke-container'>
          <div className='text-container'>
            {this.renderJoke()}
          </div>
          <div className='button-container'>
            <button className='button-generate-joke' onClick={this.getNewJoke}>Generate Joke</button>
          </div>
        </div>
      </div>
    );
  }
}

export default JokeGenerator;