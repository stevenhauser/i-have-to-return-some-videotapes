import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import World from 'components/World/World';
import EditorTools from 'components/EditorTools/EditorTools';
import EditorTiler from 'components/EditorTiler/EditorTiler';

export default createPureComponent({

  displayName: 'Editor',

  propTypes: {
    activeEntity: PropTypes.string,
    activeGround: PropTypes.string,
    minCol: PropTypes.number.isRequired,
    maxCol: PropTypes.number.isRequired,
    minRow: PropTypes.number.isRequired,
    maxRow: PropTypes.number.isRequired,
    onPickTile: PropTypes.func.isRequired,
    onPlaceTile: PropTypes.func.isRequired,
  },

  render() {
    return (
      <div className="editor">
        <EditorTools {...this.props} />
        <World row={0} col={0}>
          <EditorTiler {...this.props} />
        </World>
      </div>
    );
  }

});
