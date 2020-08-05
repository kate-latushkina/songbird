import React, {Component} from 'react';
import './Choices.css';

export default class Choices extends Component {
  render() {
    return (
      <div className='choices-block'>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
    )
  }
}