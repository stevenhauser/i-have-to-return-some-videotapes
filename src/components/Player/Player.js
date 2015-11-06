import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import classNames from 'classnames';

import { createPureComponent } from 'utils/createPureComponent';

import Tile from 'components/Tile/Tile';

export default createPureComponent({

  displayName: 'Player',

  propTypes: {
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    direction: PropTypes.string.isRequired,
  },

  render() {
    const { col, row, direction } = this.props;
    const attrs = {
      row,
      col,
      block: 'entity',
      type: 'person',
      className: classNames({
        flipped: direction === 'right'
      })
    };
    return (<Tile {...attrs} />);
  }

});
