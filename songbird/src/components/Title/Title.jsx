import React, { Component } from 'react';
import './Title.css'

export default class Title extends Component {
  render() {
    const {score} = this.props
    return (
      <div className='title-group'>
        <h1>Song<span>bird</span></h1>
        <span className='score'>Score: {score}</span>
      </div>
    )
  }
}
