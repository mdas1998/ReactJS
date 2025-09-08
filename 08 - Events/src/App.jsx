import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Micheal")

  const handleClick = () => {
    alert("You clicked me!")
  }

  const handleMouseOver = () => {
    alert("You are hovering over me!")
  }
  
  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
     <div className="button">
      <button onClick={handleClick}>Click Me</button>
     </div>
     <div className="red" onMouseOver={handleMouseOver}>
      I am a red
     </div>
     <input type="text" name="text" id="txt1" value={name} onChange={handleChange} />
    </>
  )
}

export default App
