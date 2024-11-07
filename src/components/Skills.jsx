// src/components/Skills.js
import React from "react";

const Skills = () => {
  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Redux",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "MongoDB",
    "MySQL",
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <p className="text-gray-600 mb-10">
          Here are some of the technologies I've worked with:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
