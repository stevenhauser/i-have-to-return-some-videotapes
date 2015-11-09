import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import Tile from 'components/Tile/Tile';

export default createPureComponent({

  displayName: 'EditorTile',

  propTypes: {
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  },

  onClick(e) {
    e.preventDefault();
    const { col, row, onClick } = this.props;
    const type = e.shiftKey ? 'entity' : 'ground';
    onClick(type, col, row);
  },

  render() {
    return (
      <Tile
        {...this.props}
        block="tiler"
        onClick={this.onClick}
        type="empty"
      />
    );
  }

});
