import React, { PropTypes } from 'react';

// Items
import items from '../game/items';

// Translation
import t from '../locales/translate';

/**
 * An item of the plaer
 */
class Item extends React.Component {
  /**
   * Props of the component
   *
   * @property {object} item The item to represent
   * @property {boolean} empty There isn't any item
   */
  static get propTypes() {
    return {
      empty: PropTypes.bool.isRequired,
      item: PropTypes.string
    };
  }

  /**
   * Get the item
   */
  get item() {
    return items[this.props.item];
  }

  /**
   * Display the item or an empty message
   */
  renderItem() {
    if (this.props.empty) {
      return <span className="Item__Empty">{ t('empty') }</span>;
    } else {
      let item = this.item;

      return <div className="Item__Item">
        <img className="Item__Image" src={ `/static/images/${item.image.src}` }
          alt={ t(item.image.alt) } />{ t(item.name) }
      </div>;
    }
  }

  /**
   * Render the Item component
   */
  render() {
    return (
      <article className="Item">
        { this.renderItem() }
      </article>
    );
  }
}

// Export the class
export default Item;
