import React, { Component } from 'react'
import CaravanSixState from '../Components/PlayField/Caravans/CaravanSixState'
import CaravanSixDisplay from '../Components/PlayField/Caravans/CaravanSixDisplay'
import CaravanFiveState from '../Components/PlayField/Caravans/CaravanFiveState'
import CaravanFiveDisplay from '../Components/PlayField/Caravans/CaravanFiveDisplay'
import CaravanFourState from '../Components/PlayField/Caravans/CaravanFourState'
import CaravanFourDisplay from '../Components/PlayField/Caravans/CaravanFourDisplay'
import CaravanThreeState from '../Components/PlayField/Caravans/CaravanThreeState'
import CaravanThreeDisplay from '../Components/PlayField/Caravans/CaravanThreeDisplay'
import CaravanTwoState from '../Components/PlayField/Caravans/CaravanTwoState'
import CaravanTwoDisplay from '../Components/PlayField/Caravans/CaravanTwoDisplay'
import CaravanOneState from '../Components/PlayField/Caravans/CaravanOneState'
import CaravanOneDisplay from '../Components/PlayField/Caravans/CaravanOneDisplay'

export default class CaravansContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <CaravanOneState />
        <CaravanOneDisplay />
        <CaravanTwoState />
        <CaravanTwoDisplay />
        <CaravanThreeState />
        <CaravanThreeDisplay />
        <CaravanFourState />
        <CaravanFourDisplay />
        <CaravanFiveState />
        <CaravanFiveDisplay />
        <CaravanSixState />
        <CaravanSixDisplay />
      </>
    )
  }
}
