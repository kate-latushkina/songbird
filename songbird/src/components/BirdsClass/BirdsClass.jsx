import React, { Component } from 'react';
import './BirdsClass.css'

export default class BirdsClass extends Component {
  
  render() {
    const {groups} = this.props;
    const elements = groups.map((group) => {
      const {id, groupName} = group;
      return (
        <li key={id} className='list-group-item'>{groupName}</li>
      )
    })
    return (
      <ul className='birds-group'>{elements}</ul>
    )
  }
}

