import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import World from 'components/World/World';
import HudContainer from 'components/Hud/HudContainer';

export default createPureComponent({

  displayName: 'Game',

  render() {
    return (
      <div className="game">
        <World />
        <HudContainer />
      </div>
    );
  }

});
