import React from 'react'

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "https://via.placeholder.com/300",
      deployedLink: "#",
      githubLink: "#"
    },
    {
      title: "Project 2",
      image: "https://via.placeholder.com/300",
      deployedLink: "#",
      githubLink: "#"
    },
    {
      title: "Project 3",
      image: "https://via.placeholder.com/300",
      deployedLink: "#",
      githubLink: "#"
    },
    {
      title: "Project 4",
      image: "https://via.placeholder.com/300",
      deployedLink: "#",
      githubLink: "#"
    },
    {
      title: "Project 5",
      image: "https://via.placeholder.com/300",
      deployedLink: "#",
      githubLink: "#"
    },
    {
      title: "Project 6",
      image: "https://via.placeholder.com/300",
      deployedLink: "#",
      githubLink: "#"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex justify-between">
                <a 
                  href={project.deployedLink} 
                  className="text-blue-600 hover:underline"
                >
                  Deployed App
                </a>
                <a 
                  href={project.githubLink} 
                  className="text-blue-600 hover:underline"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio