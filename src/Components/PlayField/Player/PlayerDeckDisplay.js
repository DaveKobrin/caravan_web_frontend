import React, { Component } from 'react'

const PlayerDeckDisplay = (props) => {
  const deck = props.deck

  return (
    <div className='imageContainer'>
      <ul>
        <h1>DECK</h1>
        {deck.map((x, i) => {
          return (
            <li key={i} className={'this is temporary p, utnil images'} value={x} onClick={props.onClick}>
              {x}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PlayerDeckDisplay
