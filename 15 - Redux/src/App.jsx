import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './features/counter/counterSlice'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <>
    <Navbar />
      <div>
        <button onClick={() => dispatch(decrement(count))}>-</button>
        Currently counter is {count}
        <button onClick={() => dispatch(increment(count))}>+</button>
      </div>
    </>
  )
}

export default App
