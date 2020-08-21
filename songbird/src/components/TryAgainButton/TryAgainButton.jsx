import React, {Component} from 'react';

export default class TryAgainButton extends Component {
  constructor() {
    super()
    this.renderNewGame = this.renderNewGame.bind(this)
  }
  renderNewGame() {
    this.props.handleRestart()
  }
  render() {
    const {score} = this.props
    return (
      <button className='btn btn-success' onClick={this.renderNewGame}>
        {(score === 30) ? 'Начать игру' : 'Попробовать ещё раз!'}</button>
    )
  }
}