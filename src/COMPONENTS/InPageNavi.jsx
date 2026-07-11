import React from 'react'
import { useState } from 'react'

function InPageNavi({ teams ,children, onClick}) {

    const[index, setIndex] = useState(0)

  return (
    <div>
        <p>In-Page Navigation</p>
      {teams.map((data, i) => (
        <button onClick={() =>{
           setIndex(i);
           onClick[i]();
        }}>{data}</button>
        ))}

        {children[index]}
    </div>
  )
}

export default InPageNavi