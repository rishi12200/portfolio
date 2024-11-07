// src/components/Experience.js
import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Front-End Developer",
      company: "SpiritmineTech",
      duration: "August 2023 – September 2024",
      responsibilities: [
        "Developed and maintained reusable components in React for high performance and scalability.",
        "Collaborated with backend developers to integrate RESTful APIs.",
        "Utilized Redux for state management, improving data flow across the application.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
            <p className="text-gray-600">{experience.company}</p>
            <p className="text-gray-500 text-sm mb-4">{experience.duration}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {experience.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
