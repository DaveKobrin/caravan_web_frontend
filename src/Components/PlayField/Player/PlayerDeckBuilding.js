import React, { Component, useState, useEffect, useComponent } from 'react';

const PlayerDeckBuilding = (props) => {
  return (
    <div className='deckBuildingContainer'>
      {props.playerDeck ? (
        <ul className='deckBuild-topRow'>
          {props.playerDeck.map((card, index) => {
            const imgSrc = props.deck.includes(card) ? 'http://localhost:3000/images/' + card.face : 'http://localhost:3000/images/' + card.back + '.png';
            return (
              <li key={'top' + index} value={card} name={card.name}>
                <img crossOrigin='use-credentials' src={imgSrc} alt={card.name} />
              </li>
            );
          })}
        </ul>
      ) : (
        ''
      )}
      <ul className='deckBuild-bottomRow'>
        {props.showDeck.map((card, index) => {
          const imgSrc = 'http://localhost:3000/images/' + card.face;
          return (
            <li
              key={'bottom' + index}
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
