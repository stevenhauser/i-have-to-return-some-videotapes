import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import World from 'components/World/World';
import EditorTools from 'components/EditorTools/EditorTools';

export default createPureComponent({

  displayName: 'Editor',

  render() {
    return (
      <div className="editor">
        <EditorTools />
        <World row={0} col={0} />
      </div>
    );
  }

});
