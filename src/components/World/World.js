import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';
import { gridCoordsToOffsetStyle } from 'utils/gridCoordsToStyle';

import EntitiesContainer from 'components/Entities/EntitiesContainer';
import GroundsContainer from 'components/Grounds/GroundsContainer';

import 'components/World/World.scss';

export default createPureComponent({

  displayName: 'World',

  propTypes: {
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
  },

  render() {
    const { col, row, children } = this.props;
    const style = gridCoordsToOffsetStyle(row, col);
    return (
      <div className="world" style={style}>
        <EntitiesContainer />
        <GroundsContainer />
        {children}
      </div>
    );
  }

});
