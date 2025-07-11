import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [count2,setCount2]=useState(0)
  // Memoize the function so it doesn't get recreated on every render.
  // Since the dependency array is empty, this function will stay the same across all renders.
  // Useful when passing as a prop to avoid unnecessary child re-renders (when used with React.memo).
  let forOneTime = useCallback(() => {
    return 1
  }, [])
  
  // Memoize the function so it doesn't get recreated on every render accept when the count2 changes
  let countChange=useCallback(()=>{
    setCount2(prev=>prev+1)
  },[count2])

  return (
    <>
      <Navbar func={forOneTime} func2={countChange}  />
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
