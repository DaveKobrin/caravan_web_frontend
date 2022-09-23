import React, { Component } from 'react'

const CaravanFourDisplay = (props) => {
  return (
    <>
      <h1 onClick={props.onClick}>{props.value}</h1>
    </>
  )
}
export default CaravanFourDisplay
