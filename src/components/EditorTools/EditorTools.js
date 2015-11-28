import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import { entities } from 'state/definitions/entities';
import { grounds } from 'state/definitions/grounds';

import EditorTool from 'components/EditorTool/EditorTool';

import 'components/EditorTools/EditorTools.scss';

export default createPureComponent({

  displayName: 'EditorTools',

  propTypes: {
    activeEntity: PropTypes.string,
    activeGround: PropTypes.string,
    onPickTile: PropTypes.func.isRequired,
  },

  renderGroup(groupName, active, group) {
    return Object.keys(group).map((shortName) => {
      const tile = group[shortName];
      const { type } = tile;
      return (
        <EditorTool
          key={type}
          block={groupName}
          isActive={shortName === active}
          onChoose={this.props.onPickTile}
          shortName={shortName}
          type={type}
        />
      );
    });
  },

  render() {
    const { activeEntity, activeGround } = this.props;

    return (
      <div className="editorTools">

        <div className="editorTools__group">
          <h3 className="editorTools__heading">Grounds (Click to place)</h3>
          <div className="editorTools__palette">
            {this.renderGroup('ground', activeGround, grounds)}
          </div>
        </div>

        <div className="editorTools__group">
          <h3 className="editorTools__heading">Entities (Shift + Click to place)</h3>
          <div className="editorTools__palette">
            {this.renderGroup('entity', activeEntity, entities)}
          </div>
        </div>

      </div>
    );
  }

});
