import React, { Component } from 'react';
import './GuessBird.css'
import birdsData from '../Data/birdsData';
import Choices from '../Choices/Choices';
import BirdCard from '../BirdCard/BirdCard';
import playAudio from '../utils/audio';
import CORRECT_SOUND_PATH from './../../assets/audio/correct.mp3';
import ERROR_SOUND_PATH from './../../assets/audio/error.mp3';
import QuestionBox from '../QuestionBlock/QuestionBlock'

export default class GuessBird extends Component {
  constructor() {
    super()
    this.state = {
      level: 0,
      clickBirdStatus: false,
      answeredClick: false,
      activeBirdId: 0,
      randomNumBird: 0,
      isCorrectBird: 0,
    }
    this.audio = new Audio();
    this.clickBird = this.clickBird.bind(this)
  }

  componentDidMount() {
    this.setState({randomNumBird: Math.floor(Math.random() * 6)})
  }

  render() {
    const arrBirds = birdsData[this.state.level]
    console.log(arrBirds[this.state.randomNumBird].name)
    return (
      <div>
        <QuestionBox currentBird={arrBirds[this.state.randomNumBird]} answeredClick={this.state.answeredClick} />
        <div className='birds-choices'>
          <Choices birdsGroup={arrBirds} currentBird={arrBirds[this.state.randomNumBird]} level={this.state.level} clickBird={this.clickBird}/>
          <BirdCard birdsGroup={arrBirds} activeBirdId={this.state.activeBirdId} clickBirdStatus={this.state.clickBirdStatus} level={this.state.level}/>
        </div>
      </div>
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
    (element.classList.contains('correct')) ?  element.childNodes[0].classList.add('') : element.childNodes[0].classList.add('correct')
    playAudio(CORRECT_SOUND_PATH, this.audio)
    this.setState({answeredClick: true})
  }

  isWrongBird(element) {
    (element.classList.contains('error')) ?  element.childNodes[0].classList.add('') : element.childNodes[0].classList.add('error')  
    playAudio(ERROR_SOUND_PATH, this.audio)
  }

}