import React from 'react';
import { Link } from 'react-router';

// Locales
import locale from '../locales/es';

/**
 * Render the landing page of the game
 */
const Landing = props =>
  <article className="Landing">
    <h1 className="Landing__GameName">BLIND</h1>
    <p className="Landing__GameDescription">
      { locale.game_description }
    </p>
    <p className="Landing__GameStart">
      <Link className="btn" to="/game">{ locale.start_game }</Link>
    </p>
  </article>;

export default Landing;
