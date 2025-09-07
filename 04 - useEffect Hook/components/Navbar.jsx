import React , {useEffect} from 'react'

const Navbar = ({color}) => {
  // Run on every render 
  useEffect(() => {
    alert("Hey I will run on every render")
  })

  // Run only on first render 

  useEffect(() => {
    alert("Hey I will run only once")
  }, [])

  // Run when a value of state is changed
  useEffect(() => {
    alert("color was changed")
  }, [color])

  // Unmount the component

    useEffect(() => {
    alert("Welcome to my page buddy")
    // cleanup function and its optional
    return () => {
      alert("Component was unmounted")
    }
  }, [])
  
  

  return (
    <div>
      <h2>I am a navbar of color {color}</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>   
      </ul>
    </div>
  )
}

export default Navbar
