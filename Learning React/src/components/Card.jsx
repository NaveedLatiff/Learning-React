import React from 'react'

const Card = (props) => {
  return (
    <div id="card">
     <h1>Email:{props.email}</h1>
     <h1>Password:{props.pass}</h1>
     <h1>Name:{props.name}</h1>
    </div>
  )
}

export default Card
