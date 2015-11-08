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

    const navbar = this.props.isEditing ? null : (
      <nav className="navbar">
        <iframe
          src="https://ghbtns.com/github-btn.html?user=stevenhauser&repo=i-have-to-return-some-videotapes&type=star"
          className="navbar__btn"
          frameBorder="0" scrolling="0" width="50px" height="20px"
        ></iframe>
      </nav>
    );

    return (
      <div className="app">
        {node}
        {navbar}
      </div>
    );
  }

});
