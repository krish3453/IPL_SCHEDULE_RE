import React from 'react'
import { useState,useRef } from 'react'

function InPageNavi({ teams ,children, onClick}) {

    const[index, setIndex] = useState(0)

    let tabLineRef=useRef();
    function toggleBtn(btn,i){
      let {offsetWidth, offsetLeft} = btn
      tabLineRef.current.style.width = offsetWidth + 'px';
      tabLineRef.current.style.left = offsetLeft + 'px';
      setIndex(i);
    }


  return (
    <div>
        <p>In-Page Navigation</p>
      {teams.map((data, i) => (
        
        <button
          className={'bg-gray-200 mr-3 px-12 ' + (index == i ? 'text-black' : 'text-gray-300')}
          onClick={(e) => {
            toggleBtn(e.currentTarget, i)
            onClick?.[i]?.()
          }}
        >{data}</button>
        ))}

        <hr ref={tabLineRef} className='border-black relative duration-300'/>

        {children[index]}
    </div>
  )
}

export default InPageNavi