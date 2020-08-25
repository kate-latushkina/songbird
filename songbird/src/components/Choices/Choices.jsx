import React, { Component } from 'react';
import './Choices.css';

export default class Choices extends Component {

  constructor() {
    super();
    this.audio = new Audio();
    this.onClickBird = this.onClickBird.bind(this)
  }

  onClickBird(e) {
    this.props.clickBird(e.target)
  }

  render() {
    const { birdsGroup } = this.props;
    const elements = birdsGroup.map((bird) => {
      return (
        <li key={bird.id} value={bird.id} className='list-group-item choices-items' onClick={this.onClickBird}>
          <span className='li-btn'></span>
          {bird.name}
        </li>
      )
    })
    return (
      <div className='choices-block'>
        <ul className='list-group list-group-flush'>{elements}</ul>
      </div>
    )
  }
}
