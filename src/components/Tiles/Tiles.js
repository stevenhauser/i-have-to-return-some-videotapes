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

  // TODO: This is probably one of the biggest perf issues in the app
  // due to sheer number of tiles. Besides trying to cut those down,
  // probably create a `TilesRow` component rather than rendering
  // all of the `Tile` components flat here. This way, even if there
  // are a lot of tiles, we can leverage component purity more effectively
  // by being able to skip entire rows of tiles instead of just one
  // tile out of many when doing `shouldComponentUpdate`. We'd end up
  // doing, for example, 80 `shouldComponentUpdate` comparisons instead
  // of 80 * 50 = 4000 for level one's grounds.
  render() {
    const { tiles } = this.props;
    return (
      <div className="tiles">
        {values(tiles).map(this.renderTile)}
      </div>
    );
  }

});
