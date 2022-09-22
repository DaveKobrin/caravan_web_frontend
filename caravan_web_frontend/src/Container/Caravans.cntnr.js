import React, { useState, useEffect } from 'react'
// import CaravanSixState from '../Components/PlayField/Caravans/CaravanSixState'
// import CaravanSixDisplay from '../Components/PlayField/Caravans/CaravanSixDisplay'
// import CaravanFiveState from '../Components/PlayField/Caravans/CaravanFiveState'
// import CaravanFiveDisplay from '../Components/PlayField/Caravans/CaravanFiveDisplay'
// import CaravanFourState from '../Components/PlayField/Caravans/CaravanFourState'
// import CaravanFourDisplay from '../Components/PlayField/Caravans/CaravanFourDisplay'
import CaravanThreeState from '../Components/PlayField/Caravans/CaravanThreeState'
import CaravanThreeDisplay from '../Components/PlayField/Caravans/CaravanThreeDisplay'
import CaravanTwoState from '../Components/PlayField/Caravans/CaravanTwoState'
import CaravanTwoDisplay from '../Components/PlayField/Caravans/CaravanTwoDisplay'
import CaravanOneState from '../Components/PlayField/Caravans/CaravanOneState'
import CaravanOneDisplay from '../Components/PlayField/Caravans/CaravanOneDisplay'
import PlayerContainer from './Player.cntnr'

const CaravansContainer = (props) => {
  const [caravanOne, setCaravanOne] = useState(['From CaravansContainer Sibling'])
  const [caravanTwo, setCaravanTwo] = useState([])
  const [caravanThree, setCaravanThree] = useState([])
  // const [caravanFour, setCaravanFour] = useState([])
  // const [caravanFive, setCaravanFive] = useState([])
  // const [caravanSix, setCaravanSix] = useState([])

  //Create a function to pass to Playercontainer which receives
  // [whichstateto set] maybe into a switch statement,
  //to set into the other prop which is the card received from the players move onto that determined caravan

  return (
    <>
      <PlayerContainer test={caravanOne[0]} />
      <CaravanOneState />
      <CaravanOneDisplay />
      <CaravanTwoState />
      <CaravanTwoDisplay />
      <CaravanThreeState />
      <CaravanThreeDisplay />
      {/* <CaravanFourState />
      <CaravanFourDisplay />
      <CaravanFiveState />
      <CaravanFiveDisplay />
      <CaravanSixState />
      <CaravanSixDisplay /> */}
    </>
  )
}
export default CaravansContainer
