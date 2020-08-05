import React, { Component } from 'react';
import './Title.css'

export default class Title extends Component {
  render() {
    return (
      <div className='title-group'>
        <h1>Song<span>bird</span></h1>
        <span className='score'>Score: 0</span>
      </div>
    )
  }
}
