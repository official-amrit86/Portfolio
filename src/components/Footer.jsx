import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8 px-4 mt-10 shadow-2xl rounded-t-2xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm font-semibold">&copy; 2025 Amrit. All rights reserved.</p>

        <div className="flex flex-wrap gap-4 mt-4 sm:mt-0 text-sm font-medium">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="/Update-CV.pdf"
            download
            className="hover:underline"
          >
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
