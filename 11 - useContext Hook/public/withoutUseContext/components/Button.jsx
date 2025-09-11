import React from 'react'
import Component1 from './component1'

const Button = (props) => {
  return (
    <div>
      <button><span><Component1 count={props.count} /></span>Click Me</button>
    </div>
  )
}

export default Button
