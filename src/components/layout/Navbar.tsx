import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="border-b border-slate-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link 
          to='/'
          className="text-2xl font-bold tracking-tight text-teal-900"
        >
          Seekly
        </Link>

        <div className="flex items-center gap-8">
          <Link 
            to="/explore"
            className="text-sm font-medium text-slate-700 hover:text-teal-800"
          >
            Explore
          </Link>

          <Link 
            to="/topics"
            className="text-sm font-medium text-slate-700 hover:text-teal-800"
          >
            Topics
          </Link>

          <Link 
            to="/about"
            className="text-sm font-medium text-slate-700 hover:text-teal-800"
          >
            About
          </Link>

          <Link 
            to="/search"
            className="text-sm font-medium text-slate-700 hover:text-teal-800"
          >
            Search
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar