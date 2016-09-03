/**
 * Action creators for Redux
 */

// Contstants
import types from '../config/actionTypes';

/**
 * Action to update the current stage to another.
 */
export const changeStage = name => {
  return {
    type: types.CHANGE_STAGE,
    name
  }
}

/**
 * Lose sanity!
 */
export const reduceSanity = quantity => {
  return {
    type: types.REDUCE_SANITY,
    quantity
  }
}
