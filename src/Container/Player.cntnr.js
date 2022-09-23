import React, { useState, useEffect } from 'react';
import CaravansContainer from './Caravans.cntnr';
import PlayerHandDisplay from '../Components/PlayField/Player/PlayerHandDisplay.js';

import PlayerDeckDisplay from '../Components/PlayField/Player/PlayerDeckDisplay.js';
import tempCards from '../Components/tempCards.js';
import CaravanOneDisplay from '../Components/PlayField/Caravans/CaravanOneDisplay.js';

const PlayerContainer = (props) => {
  const [playerHand, setPlayerHand] = useState([]);
  const [deck, setDeck] = useState([]);
  const [allCards, setAllCards] = useState([]);

  useEffect(
    //Original populate player hand with 8 cards
    () => {
      const arrForHand = [];
      for (let i = 0; i < 8; i++) {
        const randomNumber = Math.floor(Math.random() * tempCards.length) + 1;
        arrForHand.push(tempCards[randomNumber]);
      }
      setPlayerHand(arrForHand);
    },
    [] //only runs when playerHand changes in some way(player removes a card))
  );

  useEffect(() => {
    fetch('http://localhost:3000/cards/getCards', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllCards();
      });
  }, []);

  const [selectedCard, setSelectedCard] = useState(null);
  const handleHandClick = ({ target }) => {
    //setSelectedCard(highlights selected card)
    //clicks on caravan to place highlighted card(requires player hand card to be chosen)
  };

  const handleDeckClick = ({ target }) => {
    //Starter code
    // const { value } = target
    // console.log(value)
    // if (playerHand.length < 5) {
    //   setPlayerHand((prev) => {
    //     [...prev, value /*this should be an object*/]
    //   })
    //   deck.filter((idOfCardPulledFromDeck, i) => idOfCardPulledFromDeck !== target._id)
    // }
  };
  return (
    <div>
      <h1 onClick={props.onClick}>{props.test}</h1>
      {/* <CaravansContainer **send over selectedCard information** /> */}
      <PlayerHandDisplay playerHand={playerHand} onClick={handleHandClick} />
      <PlayerDeckDisplay deck={deck} onClick={handleDeckClick} />
    </div>
  );
};

export default PlayerContainer;
