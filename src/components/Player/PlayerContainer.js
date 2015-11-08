import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import { toMove } from 'state/actions/move';
import player from 'state/models/player';
import { coordsToId } from 'state/utils/coordsToId';

import Player from 'components/Player/Player';

const groundToType = Object.freeze({
  doorway: 'dancer',
  road: 'bike',
  roadline: 'bike',
  sidewalk: 'personWalk',
  sky: 'chopper',
  water: 'speedboat',
});

function mapStateToProps(state) {
  const col = player.getCol(state);
  const row = player.getRow(state);
  const direction = player.getDirection(state);
  const id = coordsToId(col, row);
  const groundType = state.getIn(['grounds', id, 'type']);
  const type = groundToType[groundType] || 'person';
  return {
    col,
    row,
    direction,
    type
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMove(direction) {
      dispatch(toMove(direction));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
