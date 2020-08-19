import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
  render() {
    const {level} = this.props
    const birdsGroup = [
      { groupName: 'Разминка', id: 0 },
      { groupName: 'Воробьиные', id: 1 },
      { groupName: 'Лесные птицы', id: 2 },
      { groupName: 'Певчие птицы', id: 3 },
      { groupName: 'Хищные птицы', id: 4 },
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
