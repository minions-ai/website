import React from "react";

const menu = [
  { label: "Quickstart Guide", link: "#" },
  { label: "API Reference", link: "#" },
  { label: "Tutorials", link: "#" }
];

export default function Docs() {
  return (
    <div className="flex px-8 py-16 bg-white dark:bg-gray-800 transition-colors min-h-screen">
      <aside className="w-64 mr-8 bg-indigo-50 dark:bg-gray-900 border border-indigo-200 dark:border-gray-700 rounded-lg p-4 h-fit">
        <nav>
          <ul>
            {menu.map((item) => (
              <li key={item.label} className="mb-2">
                <a href={item.link} className="text-indigo-700 dark:text-indigo-400 hover:underline">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 bg-white dark:bg-gray-900 border border-indigo-100 dark:border-gray-700 rounded-lg p-8 min-h-[300px] text-indigo-400 dark:text-indigo-300">
        <div className="text-xl">Doc Content Area (Rendered MDX Placeholder)</div>
      </main>
    </div>
  );
} 