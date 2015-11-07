import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import 'components/Camera/Camera.scss';

export default createPureComponent({

  displayName: 'Camera',

  render() {
    return (
      <div className="camera">
        {this.props.children}
      </div>
    );
  }

});
