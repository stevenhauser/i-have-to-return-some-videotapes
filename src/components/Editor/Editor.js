import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import World from 'components/World/World';
import EditorTools from 'components/EditorTools/EditorTools';

export default createPureComponent({

  displayName: 'Editor',

  propTypes: {
    activeEntity: PropTypes.string,
    activeGround: PropTypes.string,
    onPickTile: PropTypes.func.isRequired,
  },

  render() {
    return (
      <div className="editor">
        <EditorTools {...this.props} />
        <World row={0} col={0} />
      </div>
    );
  }

});
