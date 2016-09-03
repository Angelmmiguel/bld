import React, { PropTypes } from 'react';

// Component
import Item from './Item';

/**
 * Current items of the user
 */
class Items extends React.Component {
  /**
   * Props of the component
   *
   * @property {string[]} items Items of the user
   * @property {integer} maxItems Max number of items of the player
   */
  static get propTypes() {
    return {
      items: PropTypes.arrayOf(PropTypes.string),
      maxItems: PropTypes.number
    };
  }

  /**
   * Get the array to iterate
   */
  get itemsToIterate() {
    let items = [];

    for (let i = 0; i < this.props.maxItems; i++) {
      items.push(i);
    }

    return items;
  }

  /**
   * Render the Items component
   */
  render() {
    return (
      <section className="Items">
        { this.itemsToIterate.map(i =>
          <Item item={this.props.items[i] || '' } key={i} empty={this.props.items[i] === undefined} />
        )}
      </section>
    );
  }
}

// Export the class
export default Items;
