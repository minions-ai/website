import React from "react";

export default function Contact() {
  return (
    <div className="px-8 py-16 bg-white dark:bg-gray-800 transition-colors min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-8">Contact / Get Started</h1>
      <form className="max-w-md bg-indigo-50 dark:bg-gray-900 border border-indigo-200 dark:border-gray-700 rounded-lg p-6 flex flex-col gap-4 mb-8">
        <input type="text" placeholder="Name" className="px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none" />
        <input type="email" placeholder="Email" className="px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none" />
        <input type="text" placeholder="Company" className="px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none" />
        <textarea placeholder="Use Case" className="px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none" rows={3}></textarea>
        <button type="submit" className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 rounded text-white font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition">Submit</button>
      </form>
      <div className="mb-8">
        <div className="bg-white dark:bg-gray-900 border-2 border-dashed border-indigo-300 dark:border-gray-700 rounded-lg h-40 flex items-center justify-center text-indigo-400 dark:text-indigo-500">Map / Events Placeholder</div>
      </div>
      <form className="max-w-md bg-white dark:bg-gray-900 border border-indigo-100 dark:border-gray-700 rounded-lg p-4 flex flex-col md:flex-row items-center gap-2">
        <input type="email" placeholder="Your email for newsletter" className="px-4 py-2 rounded bg-indigo-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none w-full md:w-auto" />
        <button type="submit" className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 rounded text-white font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition">Sign Up</button>
      </form>
    </div>
  );
} 