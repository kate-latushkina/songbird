import React, { Component } from 'react';
import './GuessBird.css'
import guess from '../../assets/img/guess.png'

export default class GuessBird extends Component {
  render () {
    return (
      <div className='guess-bird'>
        <img src={guess} alt="guess-bird" className='guess-img'/>
        <span className='guess-bird-name'>*****</span>
      </div>
    )
  }
}