import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <nav className="flex items-center gap-6">
          <Link to="/about" className="hover:text-blue-200 transition px-3 py-2">About Me</Link>
          <Link to="/portfolio" className="hover:text-blue-200 transition px-3 py-2">Portfolio</Link>
          <Link to="/contact" className="hover:text-blue-200 transition px-3 py-2">Contact</Link>
          <Link to="/resume" className="hover:text-blue-200 transition px-3 py-2">Resume</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header