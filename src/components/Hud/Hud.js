import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import padLeft from 'lodash/string/padLeft';

import classNames from 'classnames';

import { createPureComponent } from 'utils/createPureComponent';

import { powerupTypes } from 'state/definitions/entities';

import 'components/Hud/Hud.scss';

export default createPureComponent({

  displayName: 'Hud',

  propTypes: {
    time: PropTypes.number.isRequired,
    numTapesCollected: PropTypes.number.isRequired,
    numTapesTotal: PropTypes.number.isRequired,
    powerups: PropTypes.arrayOf(PropTypes.string)
  },

  formatTime(time) {
    const min = Math.floor(time / 60);
    const sec = padLeft(time % 60, 2, '0');
    return `${min}:${sec}`;
  },

  renderPowerups(collected) {
    return powerupTypes.map((type) => {
      const className = classNames({
        'entity': true,
        [`entity--${type}`]: true,
        'hud__powerup': true,
        'hud__powerup--collected': collected.indexOf(type) > -1,
      });
      return <div key={type} className={className} />;
    });
  },

  render() {
    const {
      time,
      numTapesCollected,
      numTapesTotal,
      powerups
    } = this.props;

    return (
      <div className="hud">
        <div className="hud__itemGroup">
          <div className="hud__item hud__item--time">
            <div className="hud__content">
              {this.formatTime(time)}
            </div>
          </div>
          <div className="hud__item hud__item--tapes">
            <div className="hud__content">
              {numTapesCollected}/{numTapesTotal}
            </div>
          </div>
        </div>
        <div className="hud__item hud__item--powerups">
          <div className="hud__label">Powerups</div>
          <div className="hud__content">
            {this.renderPowerups(powerups)}
          </div>
        </div>
      </div>
    );
  }

});
