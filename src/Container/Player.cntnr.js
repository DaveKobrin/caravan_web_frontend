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
      playerInfo: {
        //temporary data until user get route
        _id: '',
        name: 'Matt',
        gamertag: 'exitbot',
        email: 'matt@gmail.com',
        password: 'something Encripted',
        balance: 100,
        friends: [],
        ownedCards: ["array of id's"],
        playerDeck: [],
      },
    };
  }

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
    //save the ne deck to the user db, by _id
    const waiting = await this.setState({
      deck: [...this.state.deck, card],
    });
    console.log(this.state.deck);
  };

  //Save deck function

  handleSaveDeck = () => {
    const tempArrayToSaveDeckToUserProfile = [];
    for (const i of this.state.deck) {
      tempArrayToSaveDeckToUserProfile.push(i._id);
    }

    this.setState((prevState) => ({
      playerInfo: {
        playerDeck: tempArrayToSaveDeckToUserProfile,
      },
    }));
    setTimeout(() => {
      console.log('playerDeck', this.state.playerInfo.playerDeck);
    }, 200);
    // fetch('http://localhost:3000/user/saveDeck', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //   Reference for searching DB
    //   }),
    //   headers: { 'Content-Type': 'application/json' },
    // });
  };
  render() {
    return (
      <div>
        <h1 onClick={this.props.onClick}>{this.props.test}</h1>
        {/* <CaravansContainer **send over selectedCard information** /> */}
        {this.state.playerHand ? <PlayerHandDisplay playerHand={this.state.playerHand} onClick={this.handleHandClick} /> : ''}
        {/* <PlayerDeckDisplay deck={deck} onClick={handleDeckClick} /> */}
        {/* if(new player, display <deck build> else display player list) */}
        {this.state.allCards ? <PlayerDeckBuilding allCards={this.state.allCards} onClick={this.handleDeckBuildingClick} playerDeck={this.state.deck} saveDeck={this.handleSaveDeck} /> : ''}
      </div>
    );
  }
}

export default PlayerContainer;
