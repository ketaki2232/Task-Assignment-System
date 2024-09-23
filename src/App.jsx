import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import New from './components/New';
import List from "./components/List"
import Details from "./components/Details"

function App() {

  return (
    
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/New" element={<New/>}/>
        <Route path="/List" element={<List/>}/>
        <Route path="/Details" element={<Details/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
