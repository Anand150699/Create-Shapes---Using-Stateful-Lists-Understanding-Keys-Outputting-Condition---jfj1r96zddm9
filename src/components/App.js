import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [shapes, setShapes]= useState([])
  const[shaper, setShaper]=useState("square")
  function handleClick(){
    setShapes([...shapes, shaper.toLowerCase()])
  }
  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={(e)=>setShaper(e.target.value)} value={shaper}>
          <option>Square</option>
          <option>Circle</option>
        </select>
        <button onClick={handleClick}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape, index)=>(
          <div className={shape} key={index}>{index}</div>
        ))}
      </div>
    </div>
  )
}


export default App;
