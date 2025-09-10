const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 mb-10 flex justify-between md:justify-around">
      <ul>
        <div className="logo text-xl text-white font-bold">Tickle</div>
      </ul>
      <ul className="flex flex-wrap gap-15 md:gap-30 justify-center sm:justify-start">
        <li className="text-white text-xl transition-all duration-75 cursor-pointer hover:scale-105">Home</li>
        <li className="text-white text-xl transition-all duration-75 cursor-pointer hover:scale-105">Tasks</li>
      </ul>
    </div>
  )
}

export default Navbar
