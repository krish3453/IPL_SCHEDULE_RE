import { useEffect, useState } from 'react'
import Home from './COMPONENTS/Home.jsx'
import { Routes,Route } from 'react-router-dom'
import MatchDetail from './COMPONENTS/MatchDetail.jsx'


function App() {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/matchDetail/:id" element={<MatchDetail />} />
    </Routes>
    // <div>
    //   <Home/>
    // </div>
  )
}

export default App
