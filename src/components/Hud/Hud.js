import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import padLeft from 'lodash/string/padLeft';

import classNames from 'classnames';

import { createPureComponent } from 'utils/createPureComponent';
import { playSound } from 'utils/sound';

import { powerupTypes } from 'state/definitions/entities';

import HudPowerup from 'components/HudPowerup/HudPowerup'

import 'components/Hud/Hud.scss';

export default createPureComponent({

  displayName: 'Hud',

  propTypes: {
    numDeaths: PropTypes.number.isRequired,
    numTapesCollected: PropTypes.number.isRequired,
    numTapesTotal: PropTypes.number.isRequired,
    onTick: PropTypes.func.isRequired,
    powerups: PropTypes.arrayOf(PropTypes.string),
    time: PropTypes.number.isRequired,
  },

  formatTime(time) {
    const min = Math.floor(time / 60);
    const sec = padLeft(time % 60, 2, '0');
    return `${min}:${sec}`;
  },

  componentDidMount() {
    this.interval = setInterval(this.props.onTick, 1000);
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  componentDidUpdate(prev) {
    const { numDeaths, numTapesCollected } = this.props;
    if (numDeaths > prev.numDeaths) { playSound('bummer'); }
    if (numTapesCollected > prev.numTapesCollected) { playSound('oh'); }
  },

  renderPowerups(collected) {
    return powerupTypes.map((type) => (
      <HudPowerup
        key={type}
        hasCollected={collected.indexOf(type) > -1}
        type={type}
      />
    ));
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
