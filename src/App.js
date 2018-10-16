import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends Component {

  state = {
    players: [
      {
        name: 'me',
        score: 0,
        id: 1
      },
      {
        name: 'them',
        score: 0,
        id: 2
      }
    ]
  };

prevPlayerId = 2;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => {
      return {
      score: prevState.players[index].score += delta
      };
    })
  }

  handleAddPlayer = (name) => {
      this.setState({
        players: [
          ...this.state.players,
          {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }]
      });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
      players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render () {
    return (
      <div className="scoreboard">

       <Header title='Scoreboard' 
       players={this.state.players}
       />

       {this.state.players.map( (player, index) =>
        <Player 
          name={player.name}
          score={player.score}
          key={player.id.toString()}
          id={player.id}
          index={index}
          changeScore={this.handleScoreChange}
          removePlayer={this.handleRemovePlayer} 
        />
       )}
       
      <AddPlayerForm addPlayer={this.handleAddPlayer} /> 
      </div>
    );
  }
}

export default App;
