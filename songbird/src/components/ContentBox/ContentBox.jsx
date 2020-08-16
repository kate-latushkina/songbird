import React, { Component } from 'react';
import GuessBird from '../GuessBird/GuessBird'
import NextLevelButton from '../NextLevelButton/NextLevelButton'

export default class ContentBox extends Component {
  render() {
    return (
      <div>
        <GuessBird />
        <NextLevelButton />
      </div>
    )
  }
}