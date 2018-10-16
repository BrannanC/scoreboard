import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

export default Header;