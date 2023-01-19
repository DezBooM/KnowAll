import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useResultContext } from "./contexts/ResultContextProvider"
import Loading from "./Loading"

function Results() {
  const { results, isLoading, getResults, search } = useResultContext()
  const location = useLocation()

  useEffect(() => {
    if (search) getResults(`${location.pathname}?query=${search}&num=20`)
  }, [search, location.pathname])

  if (isLoading) return <Loading />

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.items?.map((result, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={result.link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {result?.link?.length > 30
                    ? result.link.substring(0, 30)
                    : result.link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {result.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      )
    case "/imagesearch":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.items?.map((result, index) => (
            <a
              className="sm:p-3 p-5"
              href={result.contextLink}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={result.thumbnailImageUrl}
                alt={result.title}
                loading="lazy"
              />
              <p className="w-36 break-words text-sm mt-2">{result.title}</p>
            </a>
          ))}
        </div>
      )
    default:
      return "ERROR"
  }
}

export default Results
