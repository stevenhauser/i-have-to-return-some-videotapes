import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import Camera from 'components/Camera/Camera';
import Corngratulations from 'components/Corngratulations/Corngratulations';
import HudContainer from 'components/Hud/HudContainer';
import PlayerContainer from 'components/Player/PlayerContainer';
import WorldContainer from 'components/World/WorldContainer';

import 'components/Game/Game.scss';

export default createPureComponent({

  displayName: 'Game',

  propTypes: {
    hasWon: PropTypes.bool.isRequired,
    numCols: PropTypes.number.isRequired,
    numRows: PropTypes.number.isRequired,
  },

  render() {
    const { hasWon, numCols, numRows } = this.props;
    const corngrats = hasWon && (<Corngratulations />);

    return (
      <div className="game">
        <Camera numCols={numCols} numRows={numRows}>
          <WorldContainer>
            <PlayerContainer />
          </WorldContainer>
        </Camera>
        <HudContainer />
        {corngrats}
        <p className="game__instructions">
          Collect all of your videotapes and return them to the video
          store before time runs out, gathering items to help you on your
          quest. Just as in real life, beware harmful things like bees,
          snakes, and pieces of shit.
        </p>
      </div>
    );
  }

});
