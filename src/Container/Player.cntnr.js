import React, { Component } from 'react';
import CaravansContainer from './Caravans.cntnr';
import PlayerHandDisplay from '../Components/PlayField/Player/PlayerHandDisplay.js';

import PlayerDeckDisplay from '../Components/PlayField/Player/PlayerDeckDisplay.js';
import tempCards from '../Components/tempCards.js';
import CaravanOneDisplay from '../Components/PlayField/Caravans/CaravanOneDisplay.js';
import PlayerDeckBuilding from '../Components/PlayField/Player/PlayerDeckBuilding';

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerHand: [],
      deck: [],
      allCards: [],
      pickedCard: '',
    };
  }

  //ill get this after building deck phase
  // useEffect(
  //   //Original populate player hand with 8 cards
  //   () => {
  //     const arrForHand = [];
  //     for (let i = 0; i < 8; i++) {
  //       const randomNumber = Math.floor(Math.random() * tempCards.length) + 1;
  //       arrForHand.push(tempCards[randomNumber]);
  //     }
  //     setPlayerHand(arrForHand);
  //   },
  //   [] //only runs when playerHand changes in some way(player removes a card))
  // );

  componentDidMount() {
    fetch('http://localhost:3000/cards/getCards', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          allCards: data.foundData,
        });
      });
  }

  handleHandClick = ({ target }) => {
    //setSelectedCard(highlights selected card)
    //clicks on caravan to place highlighted card(requires player hand card to be chosen)
  };

  handleDeckClick = ({ target }) => {
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

  handleDeckBuildingClick = async (card) => {
    if (!this.state.deck) {
      console.log('tlles');
      this.setState({
        deck: card,
      });
    }

    const waiting = await this.setState({
      deck: [...this.state.deck, card],
    });
    console.log(this.state.deck, 'bottomstae');
  };
  render() {
    return (
      <div>
        <h1 onClick={this.props.onClick}>{this.props.test}</h1>
        {/* <CaravansContainer **send over selectedCard information** /> */}
        {this.state.playerHand ? <PlayerHandDisplay playerHand={this.state.playerHand} onClick={this.handleHandClick} /> : ''}
        {/* <PlayerDeckDisplay deck={deck} onClick={handleDeckClick} /> */}
        {/* if(new player, display <deck build> else display player list) */}
        {this.state.allCards ? <PlayerDeckBuilding allCards={this.state.allCards} onClick={this.handleDeckBuildingClick} /> : ''}
      </div>
    );
  }
}

export default PlayerContainer;
