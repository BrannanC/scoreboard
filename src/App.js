import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className='player-name'>
    {props.name}
      </span>
      <Counter />
    </div>
  );
}

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      score: 0
    };
  }
  render () {
    return (
      <div className="counter">
        <button className='counter-action decrement'> - </button>
        <span className='counter-score'>{this.state.score}</span>
        <button className='counter-action increment'> + </button>
      </div>
    );
  }
}

const App = (props) => {
  
  return (
    <div className="scoreboard">
     <Header title='Scoreboard' totalPlayers={props.initialPlayers.length}/>
     {props.initialPlayers.map( player =>
      <Player 
        name={player.name}
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
