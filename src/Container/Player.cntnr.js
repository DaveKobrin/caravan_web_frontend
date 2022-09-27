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
    const index = this.state.allCards.indexOf(card);
    console.log(index);
    console.log(card, 'card');
    console.log(this.state.deck);
    const temp = this.state.deck;
    temp[index] = card;
    const waiting = await this.setState({
      deck: temp,
    });
    console.log(this.state.deck, 'ya');
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
    setTimeout(() => {
      console.log(this.state.playerInfo.playerDeck, 'playerDeck');
    }, 250);
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

        {this.state.allCards ? <PlayerDeckBuilding allCards={this.state.allCards} onClick={this.handleDeckBuildingClick} playerDeck={this.state.showDeckTop} saveDeck={this.handleSaveDeck} showDeck={this.state.showDeck} deck={this.state.deck} /> : ''}

        <input type='submit' value='>' onClick={this.handleIndexingButton} hidden={this.state.showIndex === this.state.allCards.length - 11} />
      </div>
    );
  }
}

export default PlayerContainer;
