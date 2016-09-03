// Initialize the global store
import { createStore } from 'redux'
import GameReducer from '../reducers/gameReducer';

// Return the store
export default createStore(GameReducer);
