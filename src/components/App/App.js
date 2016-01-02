import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';

import { EDITOR_PATH } from 'utils/urls';

import { createPureComponent } from 'utils/createPureComponent';

export default createPureComponent({

  displayName: 'App',

  renderLink() {
    const isEditing = this.props.location.pathname.indexOf(EDITOR_PATH) > -1;
    const to = isEditing ? '/' : EDITOR_PATH;
    const text = isEditing ? 'Play this level' : 'Edit this level';
    return (<Link to={to}>{text}</Link>);
  },

  render() {
    return (
      <div className="app">
        {this.props.children}
        <nav className="navbar">
          <div className="navbar__item">
            {this.renderLink()}
          </div>
          <div className="navbar__item">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=stevenhauser&repo=i-have-to-return-some-videotapes&type=star"
              className="navbar__btn"
              frameBorder="0" scrolling="0" width="50px" height="20px"
            />
          </div>
        </nav>
      </div>
    );
  }

});
