import React from 'react'
import Cell from './cell.js'

function Row(props){
  var cells = [];
  var rowKey = props.rowKey;
  var cellsPerRow = props.width;

  function toggleAlive(aliveState){
    return aliveState ? null : "alive";
  }

  function clickHandler(key){
    var cellList = props.cellList;
    var cellAlive = cellList[key];
    cellList[key] = toggleAlive(cellAlive);
  }

  //third row in 4 row X 3 cellsPerRow = starting at 6, for 0 index
  var rowStartCellKey = (rowKey) * cellsPerRow;
  var nextRowStartCellKey = rowStartCellKey + props.width;

  for(var cellKey = rowStartCellKey; cellKey < nextRowStartCellKey; cellKey++){
    var aliveClass = props.cellList[cellKey] === 1 ? "alive" : "";
    cells.push(
      <Cell alive={aliveClass} key={cellKey.toString()} cellKey={cellKey}
        clickHandler={clickHandler.bind(this,{cellKey})}
      />
    );
  }

  return(
    <div className="board-row">
      {cells}
    </div>
  )

}

export default Row;
