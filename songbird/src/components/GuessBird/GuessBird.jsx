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

export default class GuessBird extends Component {
  constructor() {
    super()
    this.state = {
      level: 0,
      clickBirdStatus: false,
      correctAnswer: false,
      activeBirdId: 0,
      randomNumBird: 0,
    }
    this.audio = new Audio();
    this.clickBird = this.clickBird.bind(this)
    this.clickNextLevelButton = this.clickNextLevelButton.bind(this)
  }

  componentDidMount() {
    this.setState({ randomNumBird: Math.floor(Math.random() * 6) })
  }

  render() {
    const arrBirds = birdsData[this.state.level]
    console.log('correct answer - ' + arrBirds[this.state.randomNumBird].name)
    return (
      <main className='container'>
        <Title />
        <Header level={this.state.level}/>
        <div>
        <div>
          <QuestionBox currentBird={arrBirds[this.state.randomNumBird]} correctAnswer={this.state.correctAnswer} />
          <div className='birds-choices'>
            <Choices birdsGroup={arrBirds} clickBird={this.clickBird} />
            <BirdCard birdsGroup={arrBirds} activeBirdId={this.state.activeBirdId} clickBirdStatus={this.state.clickBirdStatus} level={this.state.level} />
          </div>
        </div>
        <NextLevelButton clickNextLevelButton={this.clickNextLevelButton} correctAnswer={this.state.correctAnswer} />
      </div>
      </main>
    )
  }

  clickBird = (elem) => {
    if (birdsData[this.state.level][this.state.randomNumBird].name === elem.textContent) {
      this.isCorrectBird(elem)
    } else {
      this.isWrongBird(elem)
    }
    this.setState({
      clickBirdStatus: true,
      activeBirdId: elem.value
    })
  }
  isCorrectBird(element) {
    (element.classList.contains('correct')) ? element.childNodes[0].classList.add('') : element.childNodes[0].classList.add('correct')
    playAudio(CORRECT_SOUND_PATH, this.audio)
    this.setState({ correctAnswer: true })
  }

  isWrongBird(element) {
    (element.classList.contains('error')) ? element.childNodes[0].classList.add('') : element.childNodes[0].classList.add('error')
    playAudio(ERROR_SOUND_PATH, this.audio)
  }
  clickNextLevelButton = () => {
    if(this.state.correctAnswer) {
      const numLevel = this.state.level
      this.setState({
        level: numLevel + 1,
        correctAnswer: false,
        clickBirdStatus: false,
      })
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