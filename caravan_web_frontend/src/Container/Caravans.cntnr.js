import React, { Component } from 'react'
import CaravanSixState from '../Components/PlayField/Caravans/CaravanSixState'
import CaravanSixDisplay from '../Components/PlayField/Caravans/CaravanSixDisplay'

export default class CaravansContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <CaravanSixState />
        <CaravanSixDisplay />
      </>
    )
  }
}
