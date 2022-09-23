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
          return (
            <li
              key={index}
              value={card}
              name={card.name}
              onClick={() => {
                props.onClick(card);
              }}
            >
              {card.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlayerDeckBuilding;
