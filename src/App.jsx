import React from 'react'
import './App.css'
import Accordian from './Components/Accordian/Accordian'
import RandomColor from './Components/Random-color/RandomColor'
import StarRating from './Components/StarRating/StarRating'

function App() {
  return (
    <>
      {/* Accordian Component*/}
      <Accordian />
      {/*Random Color Component  */}
      <RandomColor />
      {/* Star Rating Component */}
      <StarRating noOfStars={10}/>
    </>
  )
}

export default App
