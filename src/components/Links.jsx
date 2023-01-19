import { NavLink } from "react-router-dom"

const links = [
  { url: "/search", text: "All" },
  { url: "/imagesearch", text: "Images" },
]

function Links() {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map((link) => (
        <NavLink
          key={link.text}
          to={link.url}
          className="m-2 mb-0 current:text-blue-700 current:border-b-2 current:dark:text-blue-300 current:border-blue-700 current:pb-2"
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  )
}

export default Links
