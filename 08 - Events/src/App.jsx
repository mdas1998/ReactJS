import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Micheal")

  const [form, setForm] = useState({})

  const handleClick = () => {
    alert("You clicked me!")
  }

  const handleMouseOver = () => {
    alert("You are hovering over me!")
  }
  
  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
     <div className="button">
      <button onClick={handleClick}>Click Me</button>
     </div>
     {/* <div className="red" onMouseOver={handleMouseOver}>
      I am a red
     </div> */}
     <input type="text" name="email" id="txt1" value={form.email? form.email: ""} onChange={handleChange} />
     <input type="phone" name="phone" id="txt1" value={form.phone? form.phone: ""} onChange={handleChange} />
    </>
  )
}

export default App
