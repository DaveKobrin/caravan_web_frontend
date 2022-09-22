import React, { useState, useEffect } from 'react'

import PlayerHandDisplay from '../Components/PlayField/Player/PlayerHandDisplay.js'

import PlayerDeckDisplay from '../Components/PlayField/Player/PlayerDeckDisplay.js'

const PlayerContainer = (props) => {
  const [playerHand, setPlayerHand] = useState([])
  const [deck, setDeck] = useState([])
  const [allCards, setAllCards] = useState([])

  useEffect(
    () => {
      //do the stuff
    },
    [playerHand] //only runs when playerHand changes in some way(player removes a card))
  )
  useEffect(
    () => {
      //api call to populate the users deck database array for play
    },
    [] //the [] causes to only run one time on load
  )

  const [selectedCard, setSelectedCard] = useState(null)
  const handleHandClick = ({ target }) => {
    //setSelectedCard(highlights selected card)
    //clicks on caravan to place highlighted card(requires player hand card to be chosen)
  }

  const handleDeckClick = ({ target }) => {
    //sets deck, pops the first card of the array then add's it to the players hand
    //requires players hand to have 4 cards
  }
  return (
    <div>
      <h1 onClick={props.onClick}>{props.test}</h1>
      <PlayerHandDisplay playerHand={playerHand} onClick={handleHandClick} classForCards={selectedCard} />
      <PlayerDeckDisplay deck={deck} onClick={handleDeckClick} />
    </div>
  )
}

export default PlayerContainer
