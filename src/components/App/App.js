import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { createPureComponent } from 'utils/createPureComponent';

export default createPureComponent({

  displayName: 'App',

  render() {
    return (
      <div className="app">
        {this.props.children}
        <nav className="navbar">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=stevenhauser&repo=i-have-to-return-some-videotapes&type=star"
            className="navbar__btn"
            frameBorder="0" scrolling="0" width="50px" height="20px"
          ></iframe>
        </nav>
      </div>
    );
  }

});
