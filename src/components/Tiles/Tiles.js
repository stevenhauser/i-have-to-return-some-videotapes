import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

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

  renderTile(block, row, col, tile) {
    return !tile ? null : (
      <Tile
        key={`${tile.type}-${row}-${col}`}
        block={block}
        col={col}
        row={row}
        type={tile.type}
      />
    );
  },

  render() {
    const { block, tiles } = this.props;
    const nodes = tiles.reduce((arr, row, ri) => (
      [
        ...arr,
        // Note that we don't `filter` here because we need
        // to preserve the row and column indicies. `filter`ing
        // would mess up the columns and therefore the level grid.
        ...row.map((tile, ci) => this.renderTile(block, ri, ci, tile))
      ]
    ), []);
    return (
      <div className="tiles">
        {nodes}
      </div>
    );
  }

});
