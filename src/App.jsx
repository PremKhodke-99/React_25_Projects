import React from 'react'
import './App.css'
import Accordian from './Components/Accordian/Accordian'
import RandomColor from './Components/Random-color/RandomColor'
import StarRating from './Components/StarRating/StarRating'
import Corousel from './Components/Corousel/Corousel'
import LoadMoreData from './Components/LoadmoreData/LoadMoreData'

function App() {
  return (
    <>
      {/* Accordian Component*/}
      <Accordian />
      {/*Random Color Component  */}
      <RandomColor />
      {/* Star Rating Component */}
      <StarRating noOfStars={10} />
      {/* Carousel Image Slider component */}
      <Corousel url={'https://picsum.photos/v2/list'} page={1} limit={10} />
      {/* Load more component */}
      <LoadMoreData />
    </>
  )
}

export default App
