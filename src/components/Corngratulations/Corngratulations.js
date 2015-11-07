import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import 'components/Corngratulations/Corngratulations.scss';

export default createPureComponent({

  displayName: 'Corngratulations',

  render() {
    return (
      <div className="corngratulations">
        <p className="corngratulations_message">
          🌽gratulations.
        </p>
        <p className="corngratulations_message">
          It was…a laugh riot.
        </p>
      </div>
    );
  }

});
