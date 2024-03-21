import React from 'react'
import './App.css'
import Accordian from './Components/Accordian/Accordian'
import RandomColor from './Components/Random-color/RandomColor'
import StarRating from './Components/StarRating/StarRating'
import Corousel from './Components/Corousel/Corousel'
import LoadMoreData from './Components/LoadmoreData/LoadMoreData'
import TreeViewMenu from './Components/TreeViewMenu/TreeViewMenu'
import menu from './Components/TreeViewMenu/data'
import QRcode from './Components/QR-code-generator/QRCode'
import LightDarkMode from './Components/Light-Dark-Mode/LightDarkMode'
import ScrollIndicator from './Components/Scroll-Indicator/ScrollIndicator'
import Tabtest from './Components/CutomTabs/Tabtest'
import Modaltest from './Components/ModalPopup/modal-test'
import SearchAutoComplete from './Components/SearchAutoComplete/SearchAutoComplete'
import TicTacToe from './Components/TicTacToe/TicTacToe'
import FeatureFlagGlobalState from './Components/FeatureFlag/context'
import FeatureFlag from './Components/FeatureFlag/FeatureFlag'
import Test from './Components/UseFetchCustomHook/test'
import UseOnclickOutsideTest from './Components/UseOutsideClick/Test'
import UseWindowSizeTest from './Components/UseWindowSize/UseWindowSizeTest'

function App() {
  return (
    <>
      {/* Accordian Component*/}
      {/* <Accordian /> */}

      {/*Random Color Component  */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Carousel Image Slider component */}
      {/* <Corousel url={'https://picsum.photos/v2/list'} page={1} limit={10} /> */}

      {/* Load more component */}
      {/* <LoadMoreData /> */}

      {/* Tree View Component (Side navigation) */}
      {/* <TreeViewMenu menu={menu}/> */}

      {/* QR Code Generator */}
      {/* <QRcode /> */}

      {/* Dark Light Theme */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator  */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom Tabs Component */}
      {/* <Tabtest /> */}

      {/* Custom Modal Component */}
      {/* <Modaltest /> */}

      {/* Search Auto Complete Component */}
      {/* <SearchAutoComplete /> */}

      {/* Tic Tac Toe Component */}
      {/* <TicTacToe /> */}

      {/* Feature Flag Component */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState> */}

      {/* UseFetch cutom hook */}
      {/* <Test /> */}

      {/* useOutsideClick custom hook */}
      {/* <UseOnclickOutsideTest /> */}

      {/* useWindow resize custom hook */}
      <UseWindowSizeTest />
    </>
  )
}

export default App
