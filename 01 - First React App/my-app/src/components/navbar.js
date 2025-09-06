import React from 'react'

const navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Career</li>
      </ul>
    </div>
  )
}

export default navbar
