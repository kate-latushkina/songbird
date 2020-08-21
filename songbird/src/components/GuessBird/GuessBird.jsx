import React, { Component } from 'react';
import './GuessBird.css'
import birdsData from '../Data/birdsData';
import Choices from '../Choices/Choices';
import BirdCard from '../BirdCard/BirdCard';
import playAudio from '../utils/audio';
import CORRECT_SOUND_PATH from './../../assets/audio/correct.mp3';
import ERROR_SOUND_PATH from './../../assets/audio/error.mp3';
import QuestionBox from '../QuestionBlock/QuestionBlock';
import NextLevelButton from '../NextLevelButton/NextLevelButton';
import Header from '../Header/Header';
import Title from '../Title/Title';
import EndGame from '../EndGame/EndGame';
import TryAgainButton from '../TryAgainButton/TryAgainButton';
// import Player from '../AudioPlayer/AudioPlayer';

export default class GuessBird extends Component {
  constructor() {
    super()
    this.state = {
      level: 0,
      clickBirdStatus: false,
      correctAnswer: false,
      activeBirdId: 0,
      randomNumBird: 0,
      score: 0,
    }
    this.preScore = 5
    this.audio = new Audio();
    this.clickBird = this.clickBird.bind(this)
    this.clickNextLevelButton = this.clickNextLevelButton.bind(this)
  }

  componentDidMount() {
    this.setState({ randomNumBird: Math.floor(Math.random() * 6) })
  }

  render() {
    if (this.state.level < 6) {
      const { correctAnswer, randomNumBird, activeBirdId, clickBirdStatus, level, score } = this.state;
      const arrBirds = birdsData[level]
      console.log('correct answer - ' + arrBirds[randomNumBird].name)
      return (
        <main className='container'>
          <Title score={score} />
          <Header level={level} />
          <div>
            <div>
              <QuestionBox currentBird={arrBirds[randomNumBird]} correctAnswer={correctAnswer} />
              <div className='birds-choices'>
                <Choices birdsGroup={arrBirds} clickBird={this.clickBird} />
                <BirdCard birdsGroup={arrBirds} activeBirdId={activeBirdId} clickBirdStatus={clickBirdStatus} level={level} />
              </div>
            </div>
            <NextLevelButton clickNextLevelButton={this.clickNextLevelButton} correctAnswer={correctAnswer} />
          </div>
        </main>
      )
    } else {
      return (
        <main className='container'>
          <Title score={this.state.score} />
          <EndGame score={this.state.score} />
          <TryAgainButton score={this.state.score} handleRestart={() => {
            this.setState({
              level: 0,
              clickBirdStatus: false,
              correctAnswer: false,
              activeBirdId: 0,
              randomNumBird: 0,
              score: 0,
            })
          }} />
        </main>
      )
    }
  }

  clickBird = (elem) => {
    if (!this.state.correctAnswer) {
      const { randomNumBird, level } = this.state;
      if (birdsData[level][randomNumBird].name === elem.textContent) {
        this.isCorrectBird(elem)
      } else {
        this.isWrongBird(elem)
        this.preScore -= 1
      }
    }
    this.setState({
      clickBirdStatus: true,
      activeBirdId: elem.value,
    })
  }
  isCorrectBird(element) {
    (element.classList.contains('correct')) ? element.childNodes[0].classList.add('') : element.childNodes[0].classList.add('correct')
    playAudio(CORRECT_SOUND_PATH, this.audio)
    this.setState({
      correctAnswer: true,
      score: this.preScore + this.state.score
    })
    
  }

  isWrongBird(element) {
    (element.classList.contains('error')) ? element.childNodes[0].classList.add('') : element.childNodes[0].classList.add('error')
    playAudio(ERROR_SOUND_PATH, this.audio)
  }
  clickNextLevelButton = () => {
    if (this.state.correctAnswer) {
      const numLevel = this.state.level
      this.setState({
        level: numLevel + 1,
        correctAnswer: false,
        clickBirdStatus: false,
      })
      this.preScore = 5
      this.componentDidMount()
      document.querySelectorAll('.li-btn').forEach((li) => {
        if (li.classList.contains('error')) {
          li.classList.remove('error')
        } else {
          li.classList.remove('correct')
        }
      })
    }
  }
}