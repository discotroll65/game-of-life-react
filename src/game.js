import React, { Component } from 'react';
import Grid from './grid.js';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      cellList: [
        0,0,0,
        0,0,0,
        0,0,0
      ]
    }
  }

  render() {
    var cellList = this.state.cellList;

    return (
      <div className="game">
        <div className="game-board">
          <Grid
            width={5} rowsPerGrid={7} cellList={cellList}
          />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
export default Game;
