import React, { Component } from 'react'

import PlayerHandState from '../Components/PlayField/Player/PlayerHandState.js'
import PlayerHandDisplay from '../Components/PlayField/Player/PlayerHandDisplay.js'

import PlayerDeckState from '../Components/PlayField/Player/PlayerDeckState.js'
import PlayerDeckDisplay from '../Components/PlayField/Player/PlayerDeckDisplay.js'

export default class PlayerContainer extends Component {
  render() {
    return (
      <div>
        <h1>playercontaner</h1>
        <PlayerHandState />
        <PlayerHandDisplay />
        <PlayerDeckDisplay />
        <PlayerDeckState />
      </div>
    )
  }
}
