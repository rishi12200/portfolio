function Projects() {
  const projects = [
    {
      title: "Quiz Application",
      description: "A responsive quiz app built in React.",
      demo: "https://quiz-app-umber-iota.vercel.app/",
      code: "https://github.com/rishi12200/quiz-app",
    },
    {
      title: "EduTrack",
      description: "A student and staff management system.",

      code: "https://github.com/rishi12200/eduTrack",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg drop-shadow-lg">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <a href={project.code} className="text-blue-500 hover:underline">
                Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
