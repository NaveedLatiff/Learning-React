import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // By Using UseRef After the component rerender the value of a remain same
  // Without useRef the value of a will become 0 after every rerender 
  // let a=useRef(0)
  // useEffect(()=>{
  //   a.current=a.current+1
  //   console.log(a.current)
  // })

  let countBtnRef=useRef()
  useEffect(()=>{
    countBtnRef.current.style.backgroundColor="red"
  },[])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={countBtnRef}  onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={()=>countBtnRef.current.style.backgroundColor="green"}>Click To change Button Color</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
