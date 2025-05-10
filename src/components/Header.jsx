import React from "react";
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
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center py-4 px-8 border-b bg-white shadow-sm">
      <Link to="/" className="font-bold text-xl text-indigo-700">Minions AI</Link>
      <nav className="space-x-4 text-gray-700">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "text-indigo-700 font-semibold underline" : "hover:text-indigo-600"
            }
            end={link.to === "/"}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <Link to="/contact" className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition font-semibold shadow">Get Started</Link>
    </header>
  );
} 