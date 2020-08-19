import React, { Component } from 'react';
import win from '../../assets/img/win.gif'
import './EndGame.css'

export default class EndGame extends Component {
  render() {
    const {score} = this.props
    if (score === 30) {
      return (
        <div>
          <h1 className="display-3 text-center">Поздравляем!</h1>
          <img src={win} className='gif-block' alt='gif'></img>
          <p className="lead text-center">Вы настоящий орнитолог!</p>
          <hr className="my-4" /> 
        </div>
      );
    }
    
    return (
      <div>
        <h1 className="display-3 text-center">Поздравляем!</h1>
        <p className="lead text-center">
          Вы прошли викторину и набрали {score} из 30 возможных баллов
        </p>
        <hr className="my-4" /> 
      </div>
    );
  }
}
