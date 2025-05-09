import React from "react";

export default function Features() {
  return (
    <div className="px-8 py-16">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8">Features</h1>
      <nav className="flex space-x-4 mb-8">
        <a href="#core" className="text-indigo-600 hover:underline">Core Architecture</a>
        <a href="#agentic" className="text-indigo-600 hover:underline">Agentic AI Capabilities</a>
        <a href="#security" className="text-indigo-600 hover:underline">Security & Compliance</a>
        <a href="#engine" className="text-indigo-600 hover:underline">Workflow Engine Agnostic</a>
      </nav>
      <section id="core" className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Core Architecture</h2>
        <div className="bg-indigo-50 border border-indigo-200 rounded p-4 mb-2">[Sequence diagram of MCP stages (Reason → Plan → Action → Eval)]</div>
        <pre className="bg-gray-900 text-green-200 rounded p-4 overflow-x-auto text-sm">// Java DSL code snippet example
AgentRecipe recipe = AgentRecipe.builder()
  .withPlanner(...)
  .withExecutor(...)
  .build();
</pre>
      </section>
      <section id="agentic" className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Agentic AI Capabilities</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>RAG & Agentic RAG support</li>
          <li>Reinforcement-learning sandbox & feedback loops</li>
        </ul>
      </section>
      <section id="security" className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Security & Compliance</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Audit logs, traceability</li>
          <li>Role-based access (Keycloak integration example)</li>
        </ul>
      </section>
      <section id="engine" className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Workflow Engine Agnostic</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Plug-in adapters: Spring Batch, Airflow, etc.</li>
          <li><a href="#" className="text-indigo-600 hover:underline">Download full feature sheet (PDF)</a></li>
        </ul>
      </section>
    </div>
  );
} 