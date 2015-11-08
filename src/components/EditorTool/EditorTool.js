import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import Tile from 'components/Tile/Tile';

import 'components/EditorTool/EditorTool.scss';

export default createPureComponent({

  displayName: 'EditorTool',

  propTypes: {
    block: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  },

  render() {
    const { type, block } = this.props;
    return (
      <div key={type} className="editorTool">
        <Tile
          block={block}
          col={0}
          row={0}
          type={type}
        />
      </div>
    );
  }

});
