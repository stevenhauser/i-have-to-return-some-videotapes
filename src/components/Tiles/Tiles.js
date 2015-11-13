import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import Tile from 'components/Tile/Tile';

const TilesRow = createPureComponent({

  displayName: 'TilesRow',

  propTypes: {
    tiles: PropTypes.array.isRequired
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
    return (
      <div className="tiles__row">
        {this.props.tiles.map(this.renderTile)}
      </div>
    );
  }

});

export default createPureComponent({

  displayName: 'Tiles',

  propTypes: {
    block: PropTypes.string.isRequired,
    // TODO: This has problems with `null` values. Fix it.
    // tiles: PropTypes.arrayOf(
    //   PropTypes.shape(Tile.propTypes)
    // )
  },

  renderTilesRow(row, i) {
    const { block } = this.props;
    return (
      <TilesRow
        key={i}
        block={block}
        tiles={row}
      />
    );
  },

  render() {
    const { tiles } = this.props;
    return (
      <div className="tiles">
        {tiles.map(this.renderTilesRow)}
      </div>
    );
  }

});
