import React from 'react';
//will have to figure out images, will have to be a <img > tag inside of the <li>tag
const PlayerDeckBuilding = (props) => {
  //   const handleClick = (card) => {
  //     props.onClick(card);
  //   };
  return (
    <div className='deckBuildingContainer'>
      <h1>Build</h1>
      <ul>
        {props.allCards.map((card, index) => {
          const imgSrc = 'http://localhost:3000/images/' + card.face;
          return (
            <li
              key={index}
              value={card}
              name={card.name}
              onClick={() => {
                props.onClick(card);
              }}
            >
              <img crossOrigin='use-credentials' src={imgSrc} alt={card.name} />
            </li>
          );
        })}
      </ul>
      {props.playerDeck.length >= 30 ? <input type='submit' value='Save Deck' onClick={props.saveDeck} /> : ''}
    </div>
  );
};

export default PlayerDeckBuilding;
