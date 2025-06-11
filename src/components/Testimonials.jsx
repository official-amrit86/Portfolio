import React from "react";

function TestimonialCard({ name, text, role }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-xl transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 border border-gray-200">
      <p className="text-gray-700 italic mb-4 leading-relaxed">“{text}”</p>
      <div className="mt-4">
        <p className="font-bold text-indigo-700">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Founder, BrightTech Solutions",
      text: "Working with Amrit was a game-changer. He transformed our ideas into a fully functional web application with stunning UI and seamless backend integration.",
    },
    {
      name: "David Kumar",
      role: "CTO, CodeNest",
      text: "Amrit consistently delivers high-quality work. His understanding of the MERN stack and problem-solving ability is impressive.",
    },
    {
      name: "Ayesha Rahman",
      role: "Project Manager, WebSprint",
      text: "Professional, efficient, and always ahead of deadlines. Amrit is an asset to any tech project.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 px-4 bg-gradient-to-br from-purple-100 via-white to-blue-100"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-md">
        Testimonials
      </h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            text={testimonial.text}
          />
        ))}
      </div>
    </section>
  );
}
