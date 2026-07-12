import { useEffect, useState } from 'react'
import Home from './COMPONENTS/Home.jsx'
import { Routes,Route } from 'react-router-dom'
import MatchDetail from './COMPONENTS/MatchDetail.jsx'
import NavBar from './COMPONENTS/NavBar.jsx'
import PointTable from './COMPONENTS/PointTable.jsx'

function App() {

  return (

    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route path="/" element={<Home />} />
        <Route path="/pointTable" element={<PointTable />} />
      </Route>
      <Route path="/matchDetail/:id" element={<MatchDetail />} />
    </Routes>
    // <div>
    //   <Home/>
    // </div>
  )
}

export default App
