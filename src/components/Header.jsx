import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/docs", label: "Docs" },
  { to: "/community", label: "Community" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" }
];

export default function Header() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center py-4 px-8 border-b bg-white dark:bg-gray-900 dark:border-gray-800 shadow-sm transition-colors">
      <Link to="/" className="font-bold text-xl text-indigo-700 dark:text-indigo-400">Minions AI</Link>
      <nav className="space-x-4 text-gray-700 dark:text-gray-200">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "text-indigo-700 dark:text-indigo-400 font-semibold underline" : "hover:text-indigo-600 dark:hover:text-indigo-300"
            }
            end={link.to === "/"}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <Link to="/contact" className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition font-semibold shadow dark:bg-indigo-500 dark:hover:bg-indigo-600">Get Started</Link>
    </header>
  );
} 