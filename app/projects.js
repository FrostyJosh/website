export default function Projects() {
    const projects = [
      { name: "Project 1", description: "A brief description of Project 1", link: "https://project1.com" },
      { name: "Project 2", description: "A brief description of Project 2", link: "https://project2.com" },
    ];
  
    return (
      <section className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">{project.name}</h2>
              <p className="text-lg">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline mt-4 inline-block">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  