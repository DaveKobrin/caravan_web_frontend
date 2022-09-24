import React, { useState, useEffect } from 'react';

// import CaravanSixDisplay from '../Components/PlayField/Caravans/CaravanSixDisplay'

// import CaravanFiveDisplay from '../Components/PlayField/Caravans/CaravanFiveDisplay'

// import CaravanFourDisplay from '../Components/PlayField/Caravans/CaravanFourDisplay'

import CaravanThreeDisplay from '../Components/PlayField/Caravans/CaravanThreeDisplay';

import CaravanTwoDisplay from '../Components/PlayField/Caravans/CaravanTwoDisplay';

import CaravanOneDisplay from '../Components/PlayField/Caravans/CaravanOneDisplay';
import PlayerContainer from './Player.cntnr';
import tempCards from '../Components/tempCards';

const CaravansContainer = (props) => {
  const [caravanOne, setCaravanOne] = useState(['From CaravansContainer Sibling']);
  const [caravanTwo, setCaravanTwo] = useState(['caravan2']);
  const [caravanThree, setCaravanThree] = useState(['caravan3']);
  // const [caravanFour, setCaravanFour] = useState([])
  // const [caravanFive, setCaravanFive] = useState([])
  // const [caravanSix, setCaravanSix] = useState([])

  //Create a function to pass to Playercontainer which receives
  // [whichstateto set] maybe into a switch statement,
  //to set into the other prop which is the card received from the players move onto that determined caravan

  // const handleClick = (whichCaravan, whichCard) => {
  //   //
  // }

  const handleClick = ({ target }) => {
    console.log('click');
    console.log(target);
    //Can track target caravan from sibling
  };

  return (
    <>
      <PlayerContainer test={'testToPlayerContainer'} onClick={handleClick} />
      <CaravanOneDisplay value={caravanOne} onClick={handleClick} />
      <CaravanTwoDisplay value={caravanTwo} onClick={handleClick} />
      <CaravanThreeDisplay value={caravanThree} onClick={handleClick} />
      {/*<CaravanFourDisplay />
      <CaravanFiveDisplay />
      <CaravanSixDisplay /> */}
    </>
  );
};
export default CaravansContainer;
