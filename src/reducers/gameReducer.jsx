// Main reducer of the application

// Action types
import types from '../config/actionTypes';

// Initial state
const initialState = {
  sanity: 100,
  stage: 'intro',
  last_stage: 'intro',
  items: ['sword'],
  maxItems: 6
}

// Reducer
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
  /**
   * Change the stage of the current user
   */
  case types.CHANGE_STAGE: {
    return Object.assign({}, state, {
      stage: action.name,
      last_stage: state.stage
    });
  }
  /**
   * Reduce the sanity
   */
  case types.REDUCE_SANITY: {
    return Object.assign({}, state, {
      sanity: state.sanity - action.quantity
    });
  }
  default:
    return state
  }
}

// Export the reducer
export default gameReducer;
