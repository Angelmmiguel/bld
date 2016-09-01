import React from 'react';

// Components
import Landing from '../components/Landing';

/**
 * Base container for the game
 */
class HomeContainer extends React.Component {
  // Layout
  render() {
    return (
      <section>
        <div className="Backdrop">
          <div className="Backdrop__Hover"/>
        </div>
        { this.props.children || <Landing /> }
      </section>
    );
  }
}

export default HomeContainer;
