import React, { Component } from 'react';
import Header from '../Header/Header';
import Title from '../Title/Title';
import ContentBox from '../ContentBox/ContentBox'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <main className='container'>
        <Title />
        <Header />
        <ContentBox />
      </main>
    )
  }
}