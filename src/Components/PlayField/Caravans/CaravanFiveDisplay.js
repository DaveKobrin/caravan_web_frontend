import React, { Component } from 'react'

const CaravanFiveDisplay = (props) => {
  return (
    <>
      <h1 onClick={props.onClick}>{props.value}</h1>
    </>
  )
}
export default CaravanFiveDisplay
