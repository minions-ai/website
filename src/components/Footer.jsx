import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-8 py-8 bg-indigo-900 text-white mt-12">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
        <div className="font-bold text-lg mb-2 md:mb-0">Minions AI</div>
        <div className="space-x-4 mb-2 md:mb-0">
          <Link to="/docs" className="hover:underline">Docs</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <a href="https://github.com/minions-ai" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
        <div className="space-x-3">
          <a href="#" aria-label="Twitter" className="hover:text-indigo-300">🐦</a>
          <a href="https://github.com/minions-ai" aria-label="GitHub" className="hover:text-indigo-300">💻</a>
        </div>
      </div>
      <form className="flex flex-col md:flex-row items-center max-w-md mx-auto mt-4">
        <input type="email" placeholder="Your email for updates" className="px-4 py-2 rounded-l bg-white text-gray-800 focus:outline-none w-full md:w-auto" />
        <button type="submit" className="px-4 py-2 bg-indigo-600 rounded-r text-white font-semibold hover:bg-indigo-700 transition mt-2 md:mt-0">Subscribe</button>
      </form>
      <div className="text-center text-indigo-200 text-sm mt-6">© {new Date().getFullYear()} Minions AI. All rights reserved.</div>
    </footer>
  );
} 