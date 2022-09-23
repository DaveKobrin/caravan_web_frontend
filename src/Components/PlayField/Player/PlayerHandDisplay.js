import React from 'react'

const PlayerHandDisplay = (props) => {
  const hand = props.playerHand

  return (
    <div className='imageContainer'>
      <ul>
        <h1>PlayerHand</h1>
        {hand.map((x, i) => {
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

export default PlayerHandDisplay
