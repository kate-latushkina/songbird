import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import guess from '../../assets/img/guess.jpg';


export default class QuestionBox extends Component {

  render() {
    const { currentBird, correctAnswer } = this.props;
    return(
      <div className = 'guess-bird' >
        <img src={correctAnswer ? currentBird.image : guess} alt="guess-bird" className='guess-img' data-image={currentBird.image} />
        <div className='guess-info'>
        <span className='guess-bird-name' data-name={currentBird.name}>{correctAnswer ? currentBird.name : '*****'}</span>
          <ReactAudioPlayer
            src={currentBird.audio}
            controls
            className='birds-audio'
          />
        </div>
      </div>
    )
  }
}
