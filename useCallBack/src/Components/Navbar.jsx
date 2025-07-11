import React  from 'react'

const Navbar = (props) => {
    console.log("Navbar Rendered")
  return (
    <div>
      <p>I am a Navbar </p>
      <button onClick={props.func}>Click</button>
      <button onClick={props.func2}>Click to change Count 2</button>
    </div>
  )
}

export default React.memo(Navbar)
