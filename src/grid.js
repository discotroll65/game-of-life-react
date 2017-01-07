import React, { Component } from 'react';
import Row from './row.js';

class Grid extends Component {


  render() {
    var rows = [];
    for(var rowKey = 0; rowKey < this.props.rowsPerGrid; rowKey++){
      rows.push(
        <Row key={rowKey.toString()} rowKey={rowKey}
          cellList={this.props.cellList} width={this.props.width}
        />
      )
    }
    return (
      <div>
        {rows}
      </div>
    );
  }
}
export default Grid;
