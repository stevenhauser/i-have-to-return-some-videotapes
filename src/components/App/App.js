import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

import GameContainer from 'components/Game/GameContainer';
import Editor from 'components/Editor/Editor';

export default createPureComponent({

  displayName: 'App',

  propTypes: {
    isEditing: PropTypes.bool.isRequired
  },

  render() {
    const node = (
      !this.props.isEditing ?
      <GameContainer /> :
      <Editor />
    );

    return (
      <div className="app">
        {node}
      </div>
    );
  }

});
