import React, { Component } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './AudioPlayer.css'

export default class Player extends Component {
  render() {
    const { src } = this.props
    return (
      <AudioPlayer
        src={src}
        autoPlay={false}
        autoPlayAfterSrcChange={false}
        showJumpControls={false}
        customAdditionalControls={[]}
        customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}
        layout='horizontal-reverse'
      />
    )
  }
}
