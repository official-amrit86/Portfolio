import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-4xl mx-auto text-center">
       <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-500 to-indigo-600 drop-shadow-lg">
           About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          I'm a passionate{" "}
          <span className="text-purple-600 font-semibold">
            Full-Stack Developer
          </span>{" "}
          who loves turning ideas into real-world projects. With expertise in the{" "}
          <span className="text-blue-600 font-semibold">MERN Stack</span>, I craft responsive,
          high-performance web apps with clean UI and smooth UX.
        </p>
      </div>
    </section>
  );
}

export default About;
