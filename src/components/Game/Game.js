import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import Camera from 'components/Camera/Camera';
import Corngratulations from 'components/Corngratulations/Corngratulations';
import HudContainer from 'components/Hud/HudContainer';
import WorldContainer from 'components/World/WorldContainer';

import 'components/Game/Game.scss';

export default createPureComponent({

  displayName: 'Game',

  propTypes: {
    hasWon: PropTypes.bool.isRequired
  },

  render() {
    const corngrats = (
      this.props.hasWon ?
      <Corngratulations /> :
      null
    );

    return (
      <div className="game">
        <Camera>
          <WorldContainer />
        </Camera>
        <HudContainer />
        {corngrats}
      </div>
    );
  }

});
