import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: 'Study React', 
      desc: 'Complete React tutorials'
    },
    {
      title: 'Groceries', 
      desc: 'Buy groceries for the week'
    },
    {
      title: 'Shopping', 
      desc: 'Go shopping for clothes'
    }
  ])

  // ToDo Component
  // const ToDo = ({ todo }) => {
  //   return (
  //     <div className="todo m-2 p-4  border border-purple-400">
  //       <h3>{todo.title}</h3>
  //       <p>{todo.desc}</p>
  //     </div>
  //   )
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Todos list */}
      <div>
        {todos.map((todo, index) => (
          // <ToDo key={index} todo={todo} />
          <div key={index} className="todo m-2 p-4  border border-blue-400">
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="card">
        {showbtn ? <button>Show Button</button> : <button>Hide Button</button>}
        <button onClick={() => setShowbtn(!showbtn)}>
          Toggle Button
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
