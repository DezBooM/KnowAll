import { useContext, useState, createContext } from "react"

const ResultContext = createContext()
const url = "https://google-search72.p.rapidapi.com"

export function ResultContextProvider({ children }) {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState("")

  const getResults = async (type) => {
    setIsLoading(true)
    const res = await fetch(`${url}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
      },
    })
    const data = await res.json()
    setResults(data)
    setIsLoading(false)
  }

  return (
    <ResultContext.Provider
      value={{ results, search, setSearch, isLoading, getResults }}
    >
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)
