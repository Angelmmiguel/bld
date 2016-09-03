import React, { PropTypes } from 'react';

// Actions
import * as gameActions from '../actions/gameActions';

// Translations
import t from '../locales/translate';

/**
 * Action for the game
 */
class Action extends React.Component {
  /**
   * Props of the component
   *
   * @property {object} action The action to render
   * @property {integer} sanity The sanity of the current user
   * @property {function} dispatch Dispatch actions to Redux
   */
  static get propTypes() {
    return {
      action: PropTypes.object,
      sanity: PropTypes.number,
      dispatch: PropTypes.func
    };
  }

  constructor(props) {
    super(props);

    this.handleAction = this.handleAction.bind(this);
  }

  /**
   * Handle action click
   */
  handleAction() {
    // Check the cost of the action
    if (this.props.action.cost !== undefined) {
      // Check for sanity
      if (this.props.action.cost.sanity !== undefined) {
        this.props.dispatch(
          gameActions.reduceSanity(this.props.action.cost.sanity));
      }
      // Check for item
    }

    // Action!
    this.props.dispatch(gameActions.changeStage(this.props.action.nextStage));
  }

  /**
   * Render the Action component
   */
  render() {
    return (
      <article className='Action'>
        <div className='Action__Button btn' onClick={this.handleAction}>
          { t(this.props.action.text) }
        </div>
      </article>
    );
  }
}

// Export the class
export default Action;
