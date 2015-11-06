import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import classNames from 'classnames';

import { createPureComponent } from 'utils/createPureComponent';
import { gridCoordsToStyle } from 'utils/gridCoordsToStyle';

import 'components/Tile/Tile.scss';

export default createPureComponent({

  displayName: 'Tile',

  propTypes: {
    block: PropTypes.string.isRequired,
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  },

  render() {
    const { block, col, row, type } = this.props;
    const attrs = {
      style: gridCoordsToStyle(row, col),
      className: classNames(
        'tile',
        block,
        `${block}--${type}`
      )
    };
    return (<div {...attrs} />);
  }

});
