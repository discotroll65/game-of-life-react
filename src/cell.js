import React from 'react';

function Cell(props){
  return(
    <button className={"cell " + props.alive}
      onClick={props.clickHandler()}
    >
    </button>
  );
}

export default Cell;
