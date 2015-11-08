import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import classNames from 'classnames';

import { createPureComponent } from 'utils/createPureComponent';
import { playSound } from 'utils/sound';

export default createPureComponent({

  displayName: 'HudPowerup',

  propTypes: {
    hasCollected: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
  },

  componentDidUpdate(prev) {
    const { hasCollected, type } = this.props;
    if (hasCollected && !prev.hasCollected) { playSound(type); }
  },

  render() {
    const { hasCollected, type } = this.props;
    const className = classNames({
      'entity': true,
      [`entity--${type}`]: true,
      'hud__powerup': true,
      'hud__powerup--collected': hasCollected,
    });
    return <div key={type} className={className} />;
  }

});
