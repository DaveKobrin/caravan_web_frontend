import React, { Component, useState, useEffect, useComponent } from 'react';
//will have to figure out images, will have to be a <img > tag inside of the <li>tag
const PlayerDeckBuilding = (props) => {
  //   const handleClick = (card) => {
  //     props.onClick(card);
  //   };
  const [allCards, setAllCards] = useState([]);
  const [showIndex, setShowIndex] = useState(0);
  const [showDeck, setShowDeck] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cards/getCards', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllCards(data.foundData);
      });
  }, []);

  useEffect(() => {
    setShowIndex(props.allCards.length / 2);
    console.log(showIndex);
    const tempDeck = [];
    for (let i = showIndex - 5; i <= showIndex + 5; i++) {
      tempDeck.push(props.allCards[i]);
    }
    setShowDeck(tempDeck);
    console.log(showDeck, 'showDeck');
  }, []);

  return (
    <div className='deckBuildingContainer'>
      <h1>Build</h1>
      <input type='submit' value='<' hidden={!showIndex} />
      <ul>
        {props.showDeck.map((card, index) => {
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

// class PlayerDeckBuilding extends Component {
//   //   const handleClick = (card) => {
//   //     props.onClick(card);
//   //   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       allCards: [],
//       showIndex: 0,
//       showDeck: [],
//     };
//   }

//   componentDidMount() {
//     fetch('http://localhost:3000/cards/getCards', {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({
//           allCards: data.foundData,
//         });
//       });
//     this.setState({
//       showIndex: this.state.allCards.length / 2,
//     });
//     setTimeout(() => {}, 250);
//     console.log(this.state.showIndex);
//     const tempDeck = [];
//     for (let i = this.state.showIndex - 5; i <= this.state.showIndex + 5; i++) {
//       tempDeck.push(this.state.allCards[i]);
//     }
//     setTimeout(() => {
//       this.setState({
//         showDeck: tempDeck,
//       });
//       console.log(this.state.showDeck, 'showDeck');
//     }, 250);
//   }

//   render() {
//     return (
//       <div className='deckBuildingContainer'>
//         <h1>Build</h1>
//         <input type='submit' value='<' hidden={!this.state.showIndex} />
//         <ul>
//           {this.state.allCards.map((card, index) => {
//             const imgSrc = 'http://localhost:3000/images/' + card.face;
//             return (
//               <li
//                 key={index}
//                 value={card}
//                 name={card.name}
//                 onClick={() => {
//                   props.onClick(card);
//                 }}
//               >
//                 <img crossOrigin='use-credentials' src={imgSrc} alt={card.name} />
//               </li>
//             );
//           })}
//         </ul>
//         {this.props.playerDeck.length >= 30 ? <input type='submit' value='Save Deck' onClick={props.saveDeck} /> : ''}
//       </div>
//     );
//   }
// }

export default PlayerDeckBuilding;
