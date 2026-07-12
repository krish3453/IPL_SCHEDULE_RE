import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <div className='flex justify-center items-center gap-3 bg-gray-200 h-20'>
        
        <Link to="/"><h1>Matches</h1></Link>
        <Link to="/pointTable"><h1>Table</h1></Link>
      </div>
      <Outlet/>
    </>
  )
}

export default NavBar