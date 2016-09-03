import React, { PropTypes } from 'react';
import cs from 'classnames';

/**
 * The sanity of the player
 */
class Sanity extends React.Component {
  /**
   * Props of the component
   *
   * @property {integer} sanity The sanity of the user
   */
  static get propTypes() {
    return {
      sanity: PropTypes.number
    };
  }

  get sanityStyle() {
    return { width: `${this.props.sanity}%` };
  }

  /**
   * Render the Sanity component
   */
  render() {
    let currentClass = cs('Sanity__Current', {
        'Sanity__High': this.props.sanity >= 60,
        'Sanity__Medium': this.props.sanity < 60 && this.props.sanity > 30,
        'Sanity__Low': this.props.sanity <= 30
      });

    return (
      <article className="Sanity">
        <div className={ currentClass } style={ this.sanityStyle }/>
      </article>
    );
  }
}

// Export the class
export default Sanity;
