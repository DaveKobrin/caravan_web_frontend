import React, { useState, useEffect, useInsertionEffect } from 'react';
//will have to figure out images, will have to be a <img > tag inside of the <li>tag
const PlayerDeckBuilding = (props) => {
  //   const handleClick = (card) => {
  //     props.onClick(card);
  //   };
  const [allCards, setAllCards] = useState([]);
  const [showIndex, setShowIndex] = useState(0);
  useEffect(() => {
    fetch('http://localhost:3000/cards/getCards', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then(async (data) => {
        setAllCards(data.foundData);
      });
    setShowIndex(allCards.length / 2);
  }, []);

  const [showDeck, setShowDeck] = useState([]);
  useEffect(() => {
    console.log(showIndex);
    const tempDeck = [];
    for (let i = showIndex - 5; i <= showIndex + 5; i++) {
      tempDeck.push(allCards[i]);
    }
    setTimeout(() => {
      setShowDeck(tempDeck);
    }, 250);
  }, [showIndex]);

  return (
    <div className='deckBuildingContainer'>
      <h1>Build</h1>
      <input type='submit' value='<' hidden={!showIndex} />
      <ul>
        {allCards.map((card, index) => {
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
