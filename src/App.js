import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.initialPlayers.length}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className='player-name'>
    {props.name}
      </span>
      <Counter score={props.score}/>
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className='counter-action decrement'> - </button>
      <span className='counter-score'>{props.score}</span>
      <button className='counter-action increment'> + </button>
    </div>
  );
}

const App = (props) => {
  
    return (
      <div className="scoreboard">
       <Header title='Scoreboard' totalPlayers={2}/>
       {props.initialPlayers.map( player =>
        <Player 
          name={player.name} 
          score={player.score}
          key={player.id.toString()} 
        />
       )}
       
      </div>
    );
  
}

App.defaultProps = { initialPlayers: [
  {
    name: 'me',
    score: 20,
    id: 1
  },
  {
    name: 'them',
    score: 35,
    id: 2
  },
]};

export default App;
