import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import { gridCoordsToDimStyle } from 'utils/gridCoordsToStyle';

import 'components/Camera/Camera.scss';

export default createPureComponent({

  displayName: 'Camera',

  propTypes: {
    numCols: PropTypes.number.isRequired,
    numRows: PropTypes.number.isRequired,
  },

  render() {
    const { numCols, numRows } = this.props;
    const style = gridCoordsToDimStyle(numCols, numRows);
    return (
      <div className="camera" style={style}>
        {this.props.children}
      </div>
    );
  }

});
