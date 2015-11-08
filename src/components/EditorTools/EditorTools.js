import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import { entities } from 'state/definitions/entities';
import { grounds } from 'state/definitions/grounds';

import EditorTool from 'components/EditorTool/EditorTool';

import 'components/EditorTools/EditorTools.scss';

export default createPureComponent({

  displayName: 'EditorTools',

  renderGroup(groupName, group) {
    return Object.keys(group).map((shortName) => {
      const tile = group[shortName];
      const { type } = tile;
      return (
        <EditorTool
          key={type}
          block={groupName}
          type={type}
        />
      );
    });
  },

  render() {
    return (
      <div className="editorTools">

        <div className="editorTools__group">
          <h3 className="editorTools__heading">Groups</h3>
          <div className="editorTools__palette">
            {this.renderGroup('ground', grounds)}
          </div>
        </div>

        <div className="editorTools__group">
          <h3 className="editorTools__heading">Entities</h3>
          <div className="editorTools__palette">
            {this.renderGroup('entity', entities)}
          </div>
        </div>

      </div>
    );
  }

});
