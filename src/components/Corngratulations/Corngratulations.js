import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';
import { createSound } from 'utils/sound';

import 'components/Corngratulations/Corngratulations.scss';

export default createPureComponent({

  displayName: 'Corngratulations',

  componentDidMount() {
    this.sound = createSound('win-music');
    this.sound.play();
  },

  componentWillUnmount() {
    this.sound.pause();
    this.sound.remove();
    this.sound = null;
  },

  render() {
    return (
      <div className="corngratulations">
        <p className="corngratulations_message">
          🌽gratulations.
        </p>
        <p className="corngratulations_message">
          It was…a laugh riot.
        </p>
      </div>
    );
  }

});
