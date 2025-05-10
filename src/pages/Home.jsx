import React from "react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">Minions AI Framework: Enterprise-Grade Agentic AI</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Traceable. Auditable. Library-Agnostic. Built for Spring AI, OpenAI, Anthropic, and more.</p>
          <div className="space-x-4">
            <a href="/contact" className="px-6 py-3 bg-indigo-600 text-white rounded font-semibold hover:bg-indigo-700 transition">Get Started</a>
            <a href="https://github.com/minions-ai" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-indigo-600 text-indigo-700 rounded font-semibold hover:bg-indigo-50 transition">View on GitHub</a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 bg-indigo-100 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-6xl text-indigo-400">🤖</span>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="px-8 py-16 bg-white dark:bg-gray-800 transition-colors">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700 dark:text-indigo-400">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-indigo-50 dark:bg-gray-900 border border-indigo-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center shadow">
            <div className="text-4xl mb-4">🧩</div>
            <h3 className="font-semibold text-lg mb-2 dark:text-gray-100">Modular by Design</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Swap in/out any component. Flexible, composable architecture.</p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-900 border border-indigo-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center shadow">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-semibold text-lg mb-2 dark:text-gray-100">A2A-Ready</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Full Google Agent-to-Agent protocol support.</p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-900 border border-indigo-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center shadow">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="font-semibold text-lg mb-2 dark:text-gray-100">Enterprise-Grade</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Audit trails, versioned agents, and compliance built-in.</p>
          </div>
        </div>
      </section>
      {/* Architecture Section */}
      <section className="px-8 py-16 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center transition-colors">
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">Architecture Overview</h2>
        <div className="w-full max-w-3xl h-64 bg-white dark:bg-gray-800 border-2 border-dashed border-indigo-300 dark:border-gray-700 rounded-lg flex items-center justify-center text-indigo-400 dark:text-indigo-500 text-xl">
          Interactive SVG: Agent Recipe → Planner → Executor → Evaluator
        </div>
      </section>
      {/* Use Case Teasers */}
      <section className="px-8 py-16 bg-white dark:bg-gray-800 transition-colors">
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center">Use Case Teasers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-indigo-50 dark:bg-gray-900 border border-indigo-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center shadow">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="font-semibold text-lg mb-2 dark:text-gray-100">Regulated Finance</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Learn how ACME Bank uses Minions for RAG in loan underwriting.</p>
            <a href="/use-cases" className="mt-2 text-indigo-600 dark:text-indigo-400 hover:underline">Read Case Study</a>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-900 border border-indigo-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center shadow">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="font-semibold text-lg mb-2 dark:text-gray-100">Healthcare</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Decision-support and compliance for providers and payers.</p>
            <a href="/use-cases" className="mt-2 text-indigo-600 dark:text-indigo-400 hover:underline">Read Case Study</a>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-900 border border-indigo-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center shadow">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-semibold text-lg mb-2 dark:text-gray-100">Insurance</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Automated rating and claims workflows for insurers.</p>
            <a href="/use-cases" className="mt-2 text-indigo-600 dark:text-indigo-400 hover:underline">Read Case Study</a>
          </div>
        </div>
      </section>
    </div>
  );
} 