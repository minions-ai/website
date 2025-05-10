import React from "react";

export default function Community() {
  return (
    <div className="px-8 py-16 bg-white dark:bg-gray-800 transition-colors min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-8">Community & GitHub</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 dark:text-gray-100">Latest Releases</h2>
        <div className="bg-indigo-50 dark:bg-gray-900 border border-indigo-200 dark:border-gray-700 rounded p-4 text-gray-800 dark:text-gray-200">[GitHub API widget placeholder]</div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 dark:text-gray-100">Roadmap</h2>
        <div className="bg-indigo-50 dark:bg-gray-900 border border-indigo-200 dark:border-gray-700 rounded p-4 text-gray-800 dark:text-gray-200">[Roadmap timeline placeholder]</div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 dark:text-gray-100">Contribute</h2>
        <div className="bg-indigo-50 dark:bg-gray-900 border border-indigo-200 dark:border-gray-700 rounded p-4 text-gray-800 dark:text-gray-200">Links to issues, PR guidelines</div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2 dark:text-gray-100">Join the Conversation</h2>
        <div className="bg-indigo-50 dark:bg-gray-900 border border-indigo-200 dark:border-gray-700 rounded p-4 text-gray-800 dark:text-gray-200">[Slack / Forum embed placeholder]</div>
      </section>
    </div>
  );
} 