import React,  { useContext } from 'react'
import Component1 from './component1'
import {counterContext} from "../context/context";

const Button = () => {
  const value = useContext(counterContext)
  return (
    <div>
      <button className='bg-gray-700 text-white px-4 py-2 rounded-md' onClick={() => {value.setCount(value.count+1 )}}>Click Me</button>
      <span><Component1/></span>
    </div>
  )
}

export default Button
