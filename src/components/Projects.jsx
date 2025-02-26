function Projects() {
  const projects = [
    {
      title: "Payroll Management system",
      description:
        " A modern admin dashboard UI for payroll management, designed to help HR teams efficiently track employee records, manage payroll reports, and visualize financial data.",
      code: "https://github.com/rishi12200/Payroll-Management-System",
    },
    {
      title: "Quiz Application",
      description:
        "MCQ-based assessment application designed to seamlessly schedule and conduct online tests.",
      demo: "https://quiz-app-umber-iota.vercel.app/",
      code: "https://github.com/rishi12200/quiz-app",
    },
    {
      title: "EduTrack",
      description:
        "EduTrack is a responsive student and staff management system built with React. The application offers an intuitive interface for administrators to manage records efficiently, allowing for Create, Read, Update, and Delete (CRUD) operations on student and staff information.",
    },
    {
      title: "Project Manager Application",
      description:
        "A project management application enabling teams to collaborate, track tasks, and manage projects efficiently with a responsive, user-friendly interface.",
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
              {projects.code ? (
                <a
                  href={project.code}
                  className="text-blue-500 hover:underline"
                >
                  Code
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
