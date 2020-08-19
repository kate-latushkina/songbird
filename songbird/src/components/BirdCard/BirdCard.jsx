import React, { Component } from 'react';
import './BirdCard.css';
import birdsData from '../Data/birdsData'
import Player from '../AudioPlayer/AudioPlayer'

export default class BirdCard extends Component {
  render() {
    const { activeBirdId, clickBirdStatus, level } = this.props;
    return (
      (clickBirdStatus) ? (
        <div className='right-bird-block'>
          <div className='right-bird-block-description'>
            <div className='upper-block'>
              <img src={birdsData[level][activeBirdId - 1].image} alt="bird" />
              <div className='bird-show-correct'>
                <h3>{birdsData[level][activeBirdId - 1].name}</h3>
                <hr className="my-2" /> 
                <span>{birdsData[level][activeBirdId - 1].species}</span>
                <Player src={birdsData[level][activeBirdId - 1].audio} isVolume={false}/>
              </div>
            </div>
            <p>{birdsData[level][activeBirdId - 1].description}</p>
          </div>
        </div>) : (
          <div className='right-bird-block'>
            <p className='right-bird-block-info'>
              <span>Послушайте плеер.</span>
              <span>Выберите птицу из списка.</span>
            </p>
          </div>)
    )
  }
}