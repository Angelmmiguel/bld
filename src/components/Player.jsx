import React, { PropTypes } from 'react';

// Translation
import t from '../locales/translate';

// Components
import Sanity from './Sanity';
import Items from './Items';

/**
 * Display the panel with the current state of the player
 */
class Player extends React.Component {
  /**
   * Props of the component
   *
   * @property {integer} sanity The sanity of the user
   * @property {string[]} items Objects of the user
   * @property {integer} maxItems Max number of items for the user
   * @property {function} dispatch Dispatch actions to Redux
   */
  static get propTypes() {
    return {
      sanity: PropTypes.number,
      items: PropTypes.arrayOf(PropTypes.string),
      maxItems: PropTypes.number,
      dispatch: PropTypes.func
    };
  }

  /**
   * Render the Player component
   */
  render() {
    return (
      <section className="Player">
        <article className="Player__Block">
          <h3>{ t('sanity') }</h3>
          <Sanity sanity={ this.props.sanity } />
        </article>
        <article className="Player__Block">
          <h3>{ t('items') }</h3>
          <Items items={ this.props.items } maxItems={ this.props.maxItems } />
        </article>
      </section>
    );
  }
}

// Export the class
export default Player;
