import React, { useReducer } from 'react'

let reducer=(state,action)=>{
    switch (action.type){
      case "increment":
        return {count:state.count+1}
      case "decrement":
        if(state.count==0){
          return state
        }
        else{
          return  {count:state.count-1}
        }
      default:
        return state
    }
}


const App = () => {

  let [counter,dispatch]=useReducer(reducer,{count:0})
  return (
    <div>
      <h1>Counter:{counter.count}</h1>
      <button onClick={()=>dispatch({type:"increment"})}>+</button>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    </div>
  )
}

export default App
