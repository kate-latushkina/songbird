import React, { Component } from 'react';
import BirdsClass from '../BirdsClass/BirdsClass';
import './Header.css'

export default class Header extends Component {
  render () {
    const birdsGroup = [
      { groupName: 'Разминка', id: 1 }, 
      { groupName: 'Воробьиные', id: 2 }, 
      { groupName: 'Лесные птицы', id: 3 }, 
      { groupName: 'Певчие птицы', id: 4 }, 
      { groupName: 'Хищные птицы', id: 5 }, 
      { groupName: 'Морские птицы', id: 6 }
    ];
    return (
      <BirdsClass groups={birdsGroup}/>
    )
  }
}
