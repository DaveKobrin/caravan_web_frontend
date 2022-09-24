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
        {deck.map((card, i) => {
          const imgSrc = 'http://localhost:3000/images/' + card.face;
          return (
            <li key={i} style={style} value={card} onClick={props.onClick}>
              {card}
              <img crossOrigin='use-credentials' src={imgSrc} alt={card.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlayerDeckDisplay;
