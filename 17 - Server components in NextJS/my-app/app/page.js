// "use client" 
// import { useState, useEffect } from "react";
import fs from "fs/promises"
import Navbar from "./components/Navbar";

export default function Home() {
  // const [count, setCount] = useState(0)
  let a = fs.readFile(".gitignore");
  a.then(e => { console.log(e.toString()) })
  return (
    <>
    <div>
      <Navbar/>
      {/* I am a component {count} */}
    </div>
    {/* <button onClick={() => setCount(count+1)}>Add</button> */}
    </>
  );
} 

// by default the components are server based. but when use client is added on top it becomes client based component 
// client based component cannot run server based code like using fs module to read a file because it would try to execute fs lines in the browser and eventually it would fail