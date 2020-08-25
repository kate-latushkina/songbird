import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
  render() {
    const {level} = this.props
    const birdsGroup = [
      { groupName: 'Разминка', id: 0 },
      { groupName: 'Птицы Болот', id: 1 },
      { groupName: 'Птицы пустынь', id: 2 },
      { groupName: 'Тропические птицы', id: 3 },
      { groupName: 'Зимующие птицы', id: 4 },
      { groupName: 'Морские птицы', id: 5 }
    ];
    const elements = birdsGroup.map((group) => {
      const { id, groupName } = group;
      return (
        <li key={id} className={
          (id === level) ? "active list-group-item header-category col-6 col-md-2" : "list-group-item header-category col-6 col-md-2"
          }>{groupName}</li>
      )
    })
    return (
      <ul className='birds-group row'>{elements}</ul>
    )
  }
}
