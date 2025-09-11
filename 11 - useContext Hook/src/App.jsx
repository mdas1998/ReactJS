import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'
import { counterContext } from '../context/context'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>The count is {count}</div>
    <button className='bg-gray-700 text-white px-4 py-2 rounded-md' onClick={() => {setCount(count+1 )}}>Increment</button>
    <counterContext.Provider value={{count, setCount}}>
      <Navbar/> 
    </counterContext.Provider>
    </>
  ) 
}

export default App
