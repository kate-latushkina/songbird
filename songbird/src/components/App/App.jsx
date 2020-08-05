import React, { Component } from 'react';
import Header from '../Header/Header';
import Title from '../Title/Title';
import GuessBird from '../GuessBird/GuessBird'
import Choices from '../Choices/Choices'
import RightBird from '../RightBird/RightBird'
import NextLevelButton from '../NextLevelButton/NextLevelButton'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <main className='container'>
        <Title />
        <Header />
        <GuessBird />
        <div className='birds-choices'>
          <Choices />
          <RightBird />
        </div>
        <NextLevelButton />
      </main>
    )
  }
}