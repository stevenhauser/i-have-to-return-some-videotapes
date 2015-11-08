import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';
import { gridCoordsToStyle } from 'utils/gridCoordsToStyle';

import EntitiesContainer from 'components/Entities/EntitiesContainer';
import GroundsContainer from 'components/Grounds/GroundsContainer';
import PlayerContainer from 'components/Player/PlayerContainer';

import 'components/World/World.scss';

export default createPureComponent({

  displayName: 'World',

  propTypes: {
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
  },

  render() {
    const { col, row } = this.props;
    const style = gridCoordsToStyle(row, col);
    return (
      <div className="world" style={style}>
        <EntitiesContainer />
        <GroundsContainer />
        <PlayerContainer />
      </div>
    );
  }

});
