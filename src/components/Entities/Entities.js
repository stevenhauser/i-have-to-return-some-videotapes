import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import Entity from 'components/Entity/Entity';

export default createPureComponent({

  displayName: 'Entities',

  propTypes: {
    // TODO: This has problems with `null` values. Fix it.
    // entities: PropTypes.arrayOf(
    //   PropTypes.shape(Entity.propTypes)
    // )
  },

  renderEntity(row, col, entity) {
    return !entity ? null : (
      <Entity
        key={`${entity.type}-${row}-${col}`}
        col={col}
        row={row}
        {...entity}
      />
    );
  },

  render() {
    const { entities } = this.props;
    const nodes = entities.reduce((arr, row, ri) => (
      [
        ...arr,
        // Note that we don't `filter` here because we need
        // to preserve the row and column indicies. `filter`ing
        // would mess up the columns and therefore the level grid.
        ...row.map((e, ci) => this.renderEntity(ri, ci, e))
      ]
    ), []);
    return (
      <div className="entities">
        {nodes}
      </div>
    );
  }

});
