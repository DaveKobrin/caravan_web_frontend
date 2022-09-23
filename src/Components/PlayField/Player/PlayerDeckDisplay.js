import React from 'react';

const style = {
  height: '280px',
  width: '140px',
};
const PlayerDeckDisplay = (props) => {
  const deck = props.deck;

  return (
    <div className='imageContainer'>
      <ul>
        <h1>DECK</h1>
        {deck.map((x, i) => {
          return (
            <li key={i} style={style} value={x} onClick={props.onClick}>
              {x}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlayerDeckDisplay;
