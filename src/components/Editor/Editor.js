import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import World from 'components/World/World';

export default createPureComponent({

  displayName: 'Editor',

  render() {
    return (
      <div className="editor">
        <World row={0} col={0} />
      </div>
    );
  }

});
