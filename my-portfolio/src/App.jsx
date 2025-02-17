import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Your Name</h1>
            <nav className="space-x-4">
              <a href="/about" className="hover:text-blue-200 transition">About Me</a>
              <a href="/portfolio" className="hover:text-blue-200 transition">Portfolio</a>
              <a href="/contact" className="hover:text-blue-200 transition">Contact</a>
              <a href="/resume" className="hover:text-blue-200 transition">Resume</a>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<AboutMe />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white text-center py-4">
          <p>© 2024 Gabby</p>
        </footer>
      </div>
    </Router>
  )
}

export default App