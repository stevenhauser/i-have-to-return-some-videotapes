import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import classNames from 'classnames';

import { createPureComponent } from 'utils/createPureComponent';

import Tile from 'components/Tile/Tile';

import 'components/EditorTool/EditorTool.scss';

export default createPureComponent({

  displayName: 'EditorTool',

  propTypes: {
    block: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onChoose: PropTypes.func.isRequired,
    shortName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  },

  onClick(e) {
    const { block, onChoose, shortName } = this.props;
    e.preventDefault();
    onChoose(block, shortName);
  },

  render() {
    const { block, isActive, type } = this.props;
    const className = classNames({
      editorTool: true,
      'editorTool--active': isActive,
    });
    return (
      <div
        key={type}
        className={className}
        onClick={this.onClick}
      >
        <Tile
          block={block}
          col={0}
          row={0}
          title={type}
          type={type}
        />
      </div>
    );
  }

});
