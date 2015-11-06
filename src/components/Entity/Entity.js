import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import classNames from 'classnames';

import { createPureComponent } from 'utils/createPureComponent';
import { gridCoordsToStyle } from 'utils/gridCoordsToStyle';

import 'components/Entity/Entity.scss';

export default createPureComponent({

  displayName: 'Entity',

  propTypes: {
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  },

  render() {
    const { col, row, type } = this.props;
    const attrs = {
      style: gridCoordsToStyle(row, col),
      className: classNames(
        'entity',
        `entity--${type}`
      )
    };
    return (<div {...attrs} />);
  }

});
