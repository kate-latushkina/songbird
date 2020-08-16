import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
  render() {
    const birdsGroup = [
      { groupName: 'Разминка', id: 1 },
      { groupName: 'Воробьиные', id: 2 },
      { groupName: 'Лесные птицы', id: 3 },
      { groupName: 'Певчие птицы', id: 4 },
      { groupName: 'Хищные птицы', id: 5 },
      { groupName: 'Морские птицы', id: 6 }
    ];
    const elements = birdsGroup.map((group) => {
      const { id, groupName } = group;
      return (
        <li key={id} className='list-group-item header-category col'>{groupName}</li>
      )
    })
    return (
      <ul className='birds-group'>{elements}</ul>
    )
  }
}
