import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import Icon from './Icon';

class Player extends PureComponent {

    static PropTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number,
        index: PropTypes.number
    }

    render() {
        return (
            <div className="player">
              <span className='player-name'>
              <button className="remove-player" onClick={ () => this.props.removePlayer(this.props.id) }>x</button>
              <Icon isHighScore={this.props.isHighScore}/>
            {this.props.name}
              </span>
              <Counter 
              score={this.props.score}
              index={this.props.index}
              changeScore={this.props.changeScore}
              />
            </div>
          );
    }
  }

  export default Player;