import React from "react";
import profileImg from "../assets/portfolio.jpg"; // 🖼️ Add your profile image in src/assets

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-16 bg-gradient-to-r from-blue-100 to-purple-100"
    >
      {/* Text Section */}

      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-800 to-pink-500 text-transparent bg-clip-text animate-pulse drop-shadow-md">
          <span className="block bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#ff00cc] text-transparent bg-clip-text drop-shadow-xl animate-text-glow">
            Hey there, I'm
          </span>
          <span className="animate-wiggle">Amrit Raj Mishra</span>👋
        </h1>
        <br /> <br />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-center md:text-left">
  <span className="block bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#ff00cc] text-transparent bg-clip-text drop-shadow-xl animate-text-glow">
    
  </span>
  <span className="block mt-4 text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#34e89e] via-[#0f3443] to-[#43cea2] drop-shadow-md animate-slide-in-3d">
  Full-Stack & React Native Developer
</span>

</h1>

        <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-md tracking-wide">
          Full-Stack Developer | MERN Stack Expert | JavaScript Enthusiast
        </p>
        <br />
        <p className="mt-4 text-base md:text-lg text-gray-800 font-medium bg-white/70 backdrop-blur-md p-3 rounded-lg shadow-md">
          I craft modern web apps using{" "}
          <span className="font-bold text-indigo-600">React</span>,{" "}
          <span className="font-bold text-green-600">Node.js</span>,{" "}
          <span className="font-bold text-yellow-600">MongoDB</span>, and{" "}
          <span className="font-bold text-blue-600">Express</span> with clean
          code and stunning UI/UX design.
        </p>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <img
          id="myimg"
          src={profileImg}
          alt="Amrit Raj Mishra"
          className="w-92 h-92 md:w-84 md:h-84 object-cover rounded-full border-4 border-indigo-600 shadow-lg hover:scale-125 transition-transform duration-1000"
        />
      </div>
    </section>
  );
}
