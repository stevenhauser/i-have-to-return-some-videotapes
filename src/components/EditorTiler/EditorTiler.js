import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import zip from 'lodash/array/zip';
import range from 'lodash/utility/range';

import { createPureComponent } from 'utils/createPureComponent';

import EditorTile from 'components/EditorTile/EditorTile';

import 'components/EditorTiler/EditorTiler.scss';

const tilesCache = new Map();

export default createPureComponent({

  displayName: 'EditorTiler',

  propTypes: {
    minCol: PropTypes.number.isRequired,
    maxCol: PropTypes.number.isRequired,
    minRow: PropTypes.number.isRequired,
    maxRow: PropTypes.number.isRequired,
    onPlaceTile: PropTypes.func.isRequired,
  },

  computeTiles() {
    const { minCol, maxCol, minRow, maxRow, onPlaceTile } = this.props;
    const type = 'empty';
    const cacheKey = `${minCol}-${maxCol}-${minRow}-${maxRow}`;
    const tiles = (
      tilesCache.has(cacheKey) ?
      tilesCache.get(cacheKey) :
      tilesCache.set(
        cacheKey,
        // Create a row/column for all possible permutations
        // and `map` them into something `Tiles` understands.
        // This whole concept is not very performant from a
        // processing or memory standpoint, however it keeps
        // the reset of the code simple.
        range(minCol, maxCol + 1)
          .map((col) => range(minRow, maxRow + 1).map((row) => ({ col, row })))
          .reduce(((arr, col) => [...arr, ...col]), [])
          .map((coords) => ({ ...coords, type  }))
          .map((props, i) => (
            <EditorTile
              key={i}
              onClick={onPlaceTile}
              {...props}
            />
          ))
      ).get(cacheKey)
    );

    return tiles;
  },

  render() {
    return (
      <div className="editorTiler">
        {this.computeTiles()}
      </div>
    );
  }

});
