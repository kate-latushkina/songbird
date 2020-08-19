import React, {Component} from 'react';
import './NextLevelButton.css'

export default class NextLevelButton extends Component {
  constructor() {
    super()
    this.onClickNextButton = this.onClickNextButton.bind(this)
  }
  onClickNextButton() {
    this.props.clickNextLevelButton()
  }
  render() {
    const {correctAnswer} = this.props
    return (
      <button className={correctAnswer ? 'btn btn-success' : 'btn disactive'} onClick={this.onClickNextButton}>Следующий уровень</button>
    )
  }
  
}