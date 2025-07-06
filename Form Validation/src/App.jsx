import React, { useState } from 'react'
import './App.css'
const App = () => {
  let [email,setemail]=useState("")
    let [pass,setpass]=useState("")
  return (
    <div className='main'> 
      Email:<input type="text"
       value={email} onChange={(e)=>{
          setemail(e.target.value)
       }}/>
      <br />
      Pass:<input type="password" 
      value={pass} onChange={(e)=>{
        setpass(e.target.value)
      }}/>
      <br />

      <button onClick={()=>{
        setemail("")
        setpass("")

      }}>log In</button>
    </div>
  )
}

export default App

