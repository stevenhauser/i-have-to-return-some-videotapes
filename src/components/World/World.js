import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import EntitiesContainer from 'components/Entities/EntitiesContainer';

import 'components/World/World.scss';

export default createPureComponent({

  displayName: 'World',

  render() {
    return (
      <div className="world">
        <EntitiesContainer />
      </div>
    );
  }

});
