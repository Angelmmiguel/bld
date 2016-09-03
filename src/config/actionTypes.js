// Constants

const prefix = "@@blind";

/**
 * Name of the actions
 */
const actionsNames = [
  'CHANGE_STAGE',
  'REDUCE_SANITY'
];

// Create the actions
const actions = {};
actionsNames.forEach(name => actions[name] = `${prefix}/${name}`)

// Export them
export default actions;
