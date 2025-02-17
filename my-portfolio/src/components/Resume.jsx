import React from 'react'

function Resume() {
  const proficiencies = [
    'JavaScript', 
    'React', 
    'HTML', 
    'CSS', 
    'Node.js'
    // Add more as needed
  ]

  return (
    <div>
      <h2>Resume</h2>
      <a href="#" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default Resume