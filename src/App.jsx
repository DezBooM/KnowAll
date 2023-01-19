import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Results from "./components/Results"

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-yellow-100 dark:bg-gray-900 dark:text-white min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes>
          <Route path="/" element={<Navigate to="/search" replace />}></Route>
          <Route path="/search" element={<Results />}></Route>
          <Route path="/imagesearch" element={<Results />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
