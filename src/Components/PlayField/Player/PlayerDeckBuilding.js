import React, { Component, useState, useEffect, useComponent } from 'react';

const PlayerDeckBuilding = (props) => {
  return (
    <div className='deckBuildingContainer'>
      {props.playerDeck ? (
        <ul className='deckBuild-topRow'>
          {props.playerDeck.map((card, index) => {
            const imgSrc = props.deck.includes(card) ? process.env.REACT_APP_CARAVAN_API + '/images/' + card.face : process.env.REACT_APP_CARAVAN_API + '/images/' + card.back + '.png';
            return (
              <li
                key={'top' + index}
                value={card}
                name={card.name}
                onClick={() => {
                  props.onClickTop(card);
                }}
              >
                <img crossOrigin='use-credentials' src={imgSrc} a lt={card.name} />
              </li>
            );
          })}
        </ul>
      ) : (
        ''
      )}
      <ul className='deckBuild-bottomRow'>
        {props.showDeck.map((card, index) => {
          const imgSrc = !props.deck.includes(card) ? process.env.REACT_APP_CARAVAN_API + '/images/' + card.face : process.env.REACT_APP_CARAVAN_API + '/images/' + card.back + '.png';
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
      {props.deck.length >= 30 ? <input type='submit' value='Save Deck' onClick={props.saveDeck} /> : ''}
    </div>
  );
};

export default PlayerDeckBuilding;
