import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import World from 'components/World/World';
import Corngratulations from 'components/Corngratulations/Corngratulations';
import HudContainer from 'components/Hud/HudContainer';

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
        <World />
        <HudContainer />
        {corngrats}
      </div>
    );
  }

});
