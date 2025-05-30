import React from "react";

export default function Pricing() {
  return (
    <div className="px-8 py-16 bg-white dark:bg-gray-800 transition-colors min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-8">Pricing & Licensing</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 dark:text-gray-100">Open-Source</h2>
        <div className="flex items-center space-x-2 mb-2">
          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-semibold">Apache 2.0</span>
          <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">View License</a>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 dark:text-gray-100">Commercial Support</h2>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 mb-2">
          <li>Standard Support</li>
          <li>Enterprise Support</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2 dark:text-gray-100">Contact for Quote</h2>
        <form className="max-w-md bg-indigo-50 dark:bg-gray-900 border border-indigo-200 dark:border-gray-700 rounded-lg p-6 flex flex-col gap-4">
          <input type="text" placeholder="Name" className="px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none" />
          <input type="email" placeholder="Email" className="px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none" />
          <input type="text" placeholder="Company" className="px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none" />
          <textarea placeholder="Use Case" className="px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none" rows={3}></textarea>
          <button type="submit" className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 rounded text-white font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition">Request Quote</button>
        </form>
      </section>
    </div>
  );
} 