import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import {
  CAM_COLS,
  CAM_ROWS
} from 'utils/constants';

import clamp from 'utils/clamp'

import player from 'state/models/player';
import level from 'state/models/level';

import World from 'components/World/World';

function calcCoord(worldDim, camDim, playerCoord) {
  // Number of units that are offscreen for this x or y dimension.
  const unitsOutsideCamera = worldDim - camDim;
  // Ideal number of units around the player. This puts the player
  // in the center of the camera.
  const unitsAroundPlayer = camDim / 2;
  // The world is being translated via `top` and `left`, so we never
  // want it to be greater than 0 or else there'd be empty space shown
  // in the top or left corner.
  const maxCoord = 0;
  // The world gets translated in the opposite direction that the
  // player is moving, so the furthest it can go in the opposite
  // direction without showing beyond the world's bounds is the
  // number of units outside of the camera, but in the negative.
  const minCoord = -unitsOutsideCamera;
  // This is the ideal number of units to move the world; it tries
  // to center the player within the camera by offsetting how many
  // camera units are on either side of the player. Again, it's the
  // negative value since the world translates in the opposite direction
  // of the player.
  const coord = -(playerCoord - unitsAroundPlayer);
  // Finally, to ensure that we don't show any gaps between the world's
  // bounds and the camera, we `clamp` `coord` within those bounds.
  return clamp(minCoord, maxCoord, coord);
}

function mapStateToProps(state) {
  const worldWidth = level.width(state);
  const worldHeight = level.height(state);

  const playerCol = player.getCol(state);
  const playerRow = player.getRow(state);

  const col = calcCoord(worldWidth, CAM_COLS, playerCol);
  const row = calcCoord(worldHeight, CAM_ROWS, playerRow);

  return { col, row };
}

function mapDispatchToProps(dispatch) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(World);
