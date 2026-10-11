import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4
        focus:z-50 focus:bg-brand focus:text-white focus:rounded-full focus:px-4 
        focus:py-2 focus:text-sm focus:font-medium"
       >
        Skip to main content
      </a>
      
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout