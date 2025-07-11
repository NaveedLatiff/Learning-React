import React, { useState } from 'react'
import "./App.css"

const App = () => {
   const data = [
    {
      id: 1,
      question: "What is the capital of France?",
      option1: "Paris",
      option2: "London",
      option3: "Berlin",
      answer: "Paris"
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      option1: "Earth",
      option2: "Mars",
      option3: "Jupiter",
      answer: "Mars"
    },
    {
      id: 3,
      question: "What is the largest mammal?",
      option1: "Elephant",
      option2: "Blue Whale",
      option3: "Giraffe",
      answer: "Blue Whale"
    }
  ];

  let [indx,setIndx]=useState(0)
  let [lock,setLock]=useState(false)
  let [score,setScore]=useState(0)
  let [disabled,setDisabled]=useState(true)
  let [result,setResult]=useState(false)
  let selectOpt=(e,ans)=>{
    if(!lock){
      setLock(true)
      setDisabled(false)
      if(ans==data[indx].answer){
        console.log("correct",ans)
        e.target.classList.add("correct")
        setScore(prev=>prev+1)
      }
      else{
        e.target.classList.add("wrong")        
      }
    }
  }
  let Next=()=>{
    console.log(indx)
    if(indx<data.length-1){

      setIndx(prev=>prev +1)
      setLock(false)
      document.querySelectorAll("li").forEach((x) => {
        x.classList.remove("correct")
        x.classList.remove("wrong")
        setDisabled(true)
        console.log(x)
      });
    }
    else{
      console.log(indx)
      setResult(true)
    }
    }
    let Restart=()=>{
      setIndx(0)
      setResult(false)
      setLock(false)
      setScore(0)
      setDisabled(true)
    }

  return (
    <>
      <div className='container'>
        <h1>Quiz App</h1>
        {!result?
        <div>
          <p>{indx+1}. {data[indx].question}</p>
        <ul>
          <li onClick={(e)=>{
            selectOpt(e,data[indx].option1)
          }}>{data[indx].option1}</li>
          <li onClick={(e)=>{
            selectOpt(e,data[indx].option2)
          }}>{data[indx].option2}</li>
          <li onClick={(e)=>{
            selectOpt(e,data[indx].option3)
          }}>{data[indx].option3}</li>
        </ul>
        <button disabled={disabled} onClick={Next}>Next</button>
        </div>
        :<div className='afterQuiz'>
          <p id='result'>Your Score is {score} out of {data.length}</p>
          <button onClick={Restart}>Restart</button>
          </div>}
      </div>
    </>
  )
}


export default App
