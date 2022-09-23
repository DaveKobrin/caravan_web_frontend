import React, { Component } from 'react'

const CaravanTwoDisplay = (props) => {
  return (
    <>
      <h1 onClick={props.onClick}>{props.value}</h1>
    </>
  )
}
export default CaravanTwoDisplay
