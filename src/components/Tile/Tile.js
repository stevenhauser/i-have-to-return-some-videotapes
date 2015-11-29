import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import classNames from 'classnames';

import { createPureComponent } from 'utils/createPureComponent';
import { gridCoordsToOffsetStyle } from 'utils/gridCoordsToStyle';
import { playSound } from 'utils/sound';

import 'components/Tile/Tile.scss';

export default createPureComponent({

  displayName: 'Tile',

  propTypes: {
    block: PropTypes.string.isRequired,
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  },

  componentDidMount() {
    const { type } = this.props;
    if (type === 'ghost') { playSound('ghostified'); }
  },

  render() {
    const { block, col, row, type, className } = this.props;
    const attrs = {
      ...this.props,
      style: gridCoordsToOffsetStyle(row, col),
      className: classNames(
        className,
        'tile',
        block,
        `${block}--${type}`
      )
    };
    return (<div {...attrs} />);
  }

});
