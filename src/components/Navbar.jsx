import React from "react"
import { Link } from "react-router-dom"
import Search from "./Search"

function Navbar({ darkTheme, setDarkTheme }) {
  const handleThemeChange = () => setDarkTheme(!darkTheme)

  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-300">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl text-black bg-yellow-400 dark:bg-gray-700 dark:text-white px-2 py-1 font-bold rounded-md">
            KnowAll
          </p>
        </Link>
        <button
          onClick={handleThemeChange}
          className="bg-yellow-400 text-black rounded-full font-bold px-3 py-1 dark:bg-gray-700 dark:text-white"
        >
          {darkTheme ? "Light" : "Dark"}
        </button>
      </div>
      <Search />
    </div>
  )
}

export default Navbar
