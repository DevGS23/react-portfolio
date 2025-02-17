import React from 'react'

function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <img 
          src="https://via.placeholder.com/250" 
          alt="Profile" 
          className="rounded-full w-64 h-64 object-cover shadow-lg"
        />
        <p className="text-lg text-gray-700 max-w-xl text-center md:text-left">
          A BRIEF BIO ON ME WILL GO HERE.
        </p>
      </div>
    </div>
  )
}

export default AboutMe