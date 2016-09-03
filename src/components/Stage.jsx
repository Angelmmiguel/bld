import React, { PropTypes } from 'react';

// Translations
import t from '../locales/translate';

// components
import Action from './Action';

/**
 * An stage of the game
 */
class Stage extends React.Component {
  /**
   * Props of the component
   *
   * @property {object} stage The stage of the game
   * @property {integer} sanity Sanity of the player
   * @property {function} dispatch Dispatch actions to Redux
   */
  static get propTypes() {
    return {
      stage: PropTypes.object,
      sanity: PropTypes.number,
      dispatch: PropTypes.func
    };
  }

  /**
   * Get the number of actions
   */
  get actionColumns() {
    let length = this.props.stage.actions.length;

    if (this.props.stage.conversation) {
      return `pure-u-md-1`;  
    } else {
      return `pure-u-md-${24 / length}-24`;
    }
  }

  /**
   * Render the Stage component
   */
  render() {
    return (
      <section className="Stage">
        <article className="Stage__Text">
          { this.props.stage.paragraphs.map(p =>
            <p className="Stage__Paragraph" key={p}>{ t(p) }</p>
          )}
        </article>
        <section className="Stage__Actions pure-g">
          { this.props.stage.actions.map((action, i) =>
            <div className={ this.actionColumns } key={i}>
              <Action action={action} sanity={this.props.sanity}
                dispatch={this.props.dispatch}/>
            </div>
          )}
        </section>
      </section>
    );
  }
}

// Export the class
export default Stage;
