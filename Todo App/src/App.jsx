import React, { useRef, useState } from 'react'
import './App.css'

const App = () => {
  let [inp, setinp] = useState("")
  let [outputs, setoutputs] = useState([])
  return (
    <div className='todo-box'>
      <input type="text" placeholder='Homework' value={inp} onChange={(e) => {
        setinp(e.target.value)
      }} />
      <button className='addBtn' onClick={() => {
        setoutputs([...outputs, inp])
        setinp("")

      }}>Add</button>
      <button className='deleteAllBtn' onClick={()=>{
        setoutputs([])
      }}>Delete All</button>
      <ul>{outputs.map((item, index) => (
        <li key={index}>{item}
        <button className='deleteBtn' onClick={()=>{
          setoutputs(outputs.filter((x,i)=>i!==index))
        }}>Delete</button>
        <button className='updateBtn' onClick={()=>{
          let updatedArr=[...outputs]
          let updateValue=prompt("Enter the updated value")
          updatedArr[index]=updateValue
          setoutputs([...updatedArr])
        }}>Update</button>
        </li>
      ))}</ul>


    </div>
  )
}
import './App.css'

export default App
