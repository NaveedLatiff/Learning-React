import React, { useContext, useEffect, useState }  from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import axios from 'axios'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Project from './pages/Project.jsx'
import Service from './pages/Service.jsx'
import Footer from './components/Footer.jsx'
import { DataContext } from './Context/Context.jsx'

// API

const App = () => {
  let gettingData=useContext(DataContext)
  console.log(gettingData)
  let [data,setData]=useState([])
  let getData=()=>{
    let res=axios.get('https://fakestoreapi.com/users')
    res.then((d)=>{
      console.log(d.data)
      setData(d.data)     
    }).catch((err)=>{
      console.log(err)
    })

  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div id="app-root">
      <Navbar/>
      <main>
      <Routes>      
        <Route path='/' element={<Home data={data} />}></Route>
        <Route path='/contact' element={<Contact  />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/service' element={<Service />}></Route>

      </Routes>
      </main>
      <Footer/>
        </div>
  )
}
export default App






// Fragments are empty tag


// Component
// const App = () => {
  
//   let users=[
//     {
//       "name": "Alice Smith",
//       "city": "Karachi",
//       "p_number": "+92-300-1234567"
//     },
//     {
//       "name": "Bilal Khan",
//       "city": "Lahore",
//       "p_number": "+92-321-2345678"
//     },
//     {
//       "name": "Carlos Mendes",
//       "city": "Islamabad",
//       "p_number": "+92-333-3456789"
//     },
//     {
//       "name": "Diana Patel",
//       "city": "Peshawar",
//       "p_number": "+92-344-4567890"
//     }
//   ]
  
  
//   return (
//     <>
//     <Navbar/>
//     <div id="cards-parent">
//     {users.map((data,indx)=>{
//       return <Card key={indx} name={data.name} city={data.city} no={data.p_number}/>
//     })}
//     </div>

//     </>
//   )
// }
// export default App


// form Handling in react
// function App(){

//     let [username,changeName]=useState("")
//     function submit(e){
//       e.preventDefault()
//       console.log(username)
//       changeName("")
//     }
//     return (
//       <form onSubmit={(e)=>{
//         submit(e)
        
//       }}>

//         <input onChange={(e)=>{
//           changeName(e.target.value)
//         }} type="text" value={username}/>
//         <button >Submit</button>
//       </form>
//     )
// }

// export default App
