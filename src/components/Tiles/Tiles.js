import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import values from 'lodash/object/values';

import { createPureComponent } from 'utils/createPureComponent';

import Tile from 'components/Tile/Tile';

export default createPureComponent({

  displayName: 'Tiles',

  propTypes: {
    block: PropTypes.string.isRequired,
    // TODO: This has problems with `null` values. Fix it.
    // tiles: PropTypes.arrayOf(
    //   PropTypes.shape(Tile.propTypes)
    // )
  },

  renderTile(tile) {
    const { block } = this.props;
    const { type, row, col } = tile;
    return !tile ? null : (
      <Tile
        key={`${type}-${row}-${col}`}
        block={block}
        col={col}
        row={row}
        type={type}
      />
    );
  },

  render() {
    const { tiles } = this.props;
    return (
      <div className="tiles">
        {values(tiles).map(this.renderTile)}
      </div>
    );
  }

});
