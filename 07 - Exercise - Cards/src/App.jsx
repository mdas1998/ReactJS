import { useState, useEffect } from 'react'
import CardsList from '../components/CardsList'
import Nav from '../components/Nav'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch('https://jsonplaceholder.typicode.com/posts')
      setCards(await data.json())
    }
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Navbar */}
      <Nav />

      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Posts
        </h1>

        {/* ✅ Pass cards to CardsList */}
        <CardsList cards={cards.slice(0, 12)} />
      </div>
    </div>
  )
}

export default App
