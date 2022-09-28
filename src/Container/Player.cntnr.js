import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import CaravansContainer from './Caravans.cntnr';
import PlayerHandDisplay from '../Components/PlayField/Player/PlayerHandDisplay.js';

import PlayerDeckDisplay from '../Components/PlayField/Player/PlayerDeckDisplay.js';
import CaravanOneDisplay from '../Components/PlayField/Caravans/CaravanOneDisplay.js';
import PlayerDeckBuilding from '../Components/PlayField/Player/PlayerDeckBuilding';

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerHand: [],
      deck: [],
      allCards: [],
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
      showIndex: 0,
      showDeck: [],
      showDeckTop: [],
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
          showIndex: data.foundData.length / 2,
        });
        setTimeout(() => {
          const tempDeck = [];
          for (let i = this.state.showIndex - 5; i <= this.state.showIndex + 5; i++) {
            tempDeck.push(data.foundData[i]);
          }
          setTimeout(() => {
            this.setState({
              showDeck: tempDeck,
            });
          }, 250);
        }, 100);
      });
  }
  componentDidUpdate() {
    setTimeout(() => {
      const tempDeck = [];
      const topDeck = [];
      for (let i = this.state.showIndex; i <= this.state.showIndex + 10; i++) {
        tempDeck.push(this.state.allCards[i]);
        topDeck.push(this.state.allCards[i]);
      }
      setTimeout(() => {
        this.setState({
          showDeck: tempDeck,
          showDeckTop: topDeck,
        });
        // console.log(this.state.showDeckTop);
      }, 250);
    });
  }

  //I'mprobably going to put these in a different file, and passdown the few things it needs as props and set it in it's own state with a end game function

  // handleHandClick = ({ target }) => {
  //   //setSelectedCard(highlights selected card)
  //   //clicks on caravan to place highlighted card(requires player hand card to be chosen)
  // };

  // handleDeckClick = ({ target }) => {
  //   //Starter code
  //   // const { value } = target
  //   // console.log(value)
  //   // if (playerHand.length < 5) {
  //   //   setPlayerHand((prev) => {
  //   //     [...prev, value /*this should be an object*/]
  //   //   })
  //   //   deck.filter((idOfCardPulledFromDeck, i) => idOfCardPulledFromDeck !== target._id)
  //   // }
  // };

  handleTopDeckbuildingClick = async (card) => {
    const temp = this.state.deck.filter((filter) => filter._id !== card._id);
    this.setState({
      deck: temp,
    });
  };

  handleDeckBuildingClick = async (card) => {
    //save the ne deck to the user db, by _id
    if (this.state.deck.includes(card)) {
      return null;
    }
    const index = this.state.allCards.indexOf(card);
    const temp = this.state.deck;
    temp[index] = card;

    const waiting = await this.setState({
      deck: temp.filter((real) => real),
    });
    console.log(this.state.deck, 'bot');
  };

  handleSaveDeck = () => {
    const tempArrayToSaveDeckToUserProfile = [];
    for (const i of this.state.deck) {
      if (i) {
        tempArrayToSaveDeckToUserProfile.push(i);
      }
    }

    this.setState({
      playerInfo: {
        playerDeck: tempArrayToSaveDeckToUserProfile,
      },
    });
  };

  handleIndexingButton = ({ target }) => {
    const { value } = target;
    if (value === '<' && this.state.showIndex > 0 && this.state.showIndex < 10) {
      this.setState({
        showIndex: (this.state.showIndex -= 1),
      });
    }
    if (value === '<' && this.state.showIndex >= 10) {
      this.setState({
        showIndex: (this.state.showIndex -= 10),
      });
    }
    if (value === '>' && this.state.showIndex <= this.state.allCards.length - 20) {
      this.setState({
        showIndex: (this.state.showIndex += 10),
      });
    }
    if (value === '>' && this.state.showIndex <= this.state.allCards.length - 2) {
      this.setState({
        showIndex: (this.state.showIndex += 1),
      });
    }
    setTimeout(() => {}, 100);
  };

  render() {
    return (
      <div>
        <h1 onClick={this.props.onClick}>{this.props.test}</h1>
        {/* <CaravansContainer **send over selectedCard information** /> */}
        {this.state.playerHand ? <PlayerHandDisplay playerHand={this.state.playerHand} onClick={this.handleHandClick} /> : ''}
        {/* <PlayerDeckDisplay deck={deck} onClick={handleDeckClick} /> */}
        {/* if(new player, display <deck build> else display player list) */}

        <input type='submit' value='<' onClick={this.handleIndexingButton} hidden={!this.state.showIndex} />

        {/* set this up to a route player can go to for building a deck i think seperate route for editing deck */}
        {this.state.allCards ? <PlayerDeckBuilding allCards={this.state.allCards} onClick={this.handleDeckBuildingClick} playerDeck={this.state.showDeckTop} saveDeck={this.handleSaveDeck} showDeck={this.state.showDeck} deck={this.state.deck} onClickTop={this.handleTopDeckbuildingClick} /> : ''}

        <input type='submit' value='>' onClick={this.handleIndexingButton} hidden={this.state.showIndex === this.state.allCards.length - 11} />
      </div>
    );
  }
}

export default PlayerContainer;
