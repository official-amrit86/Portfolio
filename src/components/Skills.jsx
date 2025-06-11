import React from "react";

function SkillItem({ name }) {
  return (
    <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white shadow-2xl rounded-2xl p-6 text-center transform transition duration-300 hover:scale-110 hover:rotate-1 hover:shadow-3xl">
      <p className="text-xl font-bold drop-shadow-md">{name}</p>
    </div>
  );
}

export default function Skills() {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git & GitHub",
    "REST API",
    "Vite",
    "Firebase"
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-blue-100 via-purple-200 to-pink-100"
    >
      <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
        🚀 My Superpowers
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <SkillItem key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
}
