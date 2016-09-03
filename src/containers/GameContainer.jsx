import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Game
import GameStages from '../game';

// Components
import Stage from '../components/Stage';
import Player from '../components/Player';

/**
 * Game Container
 */
class GameContainer extends React.Component {
  /**
   * Props of the component
   *
   * @property {object} stage The stage of the game
   * @property {integer} sanity The sanity of the user
   * @property {object[]} items Objects of the user
   * @property {integer} maxItems Max number of items for the user
   * @property {function} dispatch Dispatch actions to Redux
   */
  static get propTypes() {
    return {
      stage: PropTypes.object,
      sanity: PropTypes.number,
      items: PropTypes.arrayOf(PropTypes.string),
      maxItems: PropTypes.number,
      dispatch: PropTypes.func
    };
  }

  // Layout
  render() {
    return (
      <section className="Game">
        <Stage stage={ this.props.stage } sanity={ this.props.sanity }
          dispatch={this.props.dispatch} />
        <Player sanity={ this.props.sanity } items={ this.props.items }
          dispatch={this.props.dispatch} maxItems={ this.props.maxItems } />
      </section>
    );
  }
}

/**
 * Map the Redux state to the props
 */
const mapStateToProps = (state) => {
  const { sanity, stage, items, maxItems } = state;
  // Get the stage
  let parsedStage = GameStages[stage];

  // Send the whole state
  return {
    stage: parsedStage,
    sanity,
    items,
    maxItems
  };
}

export default connect(mapStateToProps)(GameContainer);
