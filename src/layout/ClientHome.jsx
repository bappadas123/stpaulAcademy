import React from 'react'
import { Outlet , Link} from 'react-router-dom'

function ClientHome() {
  return (
   
        <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">My Website</h1>
          <nav className="space-x-4">
           

            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
             <Link to="/contact">Contact</Link>

          </nav>
          </div>
      </header>
        <main className="flex flex-1 items-center justify-center bg-gray-100">
        <Outlet />
      </main>
       <footer className="bg-gray-800 text-gray-300">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-sm">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </footer>
    </div>
   
  )
}

export default ClientHome
