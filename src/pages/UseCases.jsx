import React from "react";

const useCases = [
  {
    icon: "💼",
    title: "Insurance Rating Workflows",
    blurb: "Automate insurance rating and claims workflows for efficiency and compliance.",
    link: "#"
  },
  {
    icon: "📊",
    title: "Financial Compliance Reporting",
    blurb: "Streamline regulatory reporting and ensure auditability in finance.",
    link: "#"
  },
  {
    icon: "🏥",
    title: "Healthcare Decision-Support",
    blurb: "Support providers and payers with AI-driven decision tools.",
    link: "#"
  }
];

export default function UseCases() {
  return (
    <div className="px-8 py-16 bg-white dark:bg-gray-800 transition-colors min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-8">Use Cases</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {useCases.map((uc) => (
          <div key={uc.title} className="bg-indigo-50 dark:bg-gray-900 border border-indigo-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center shadow">
            <div className="text-4xl mb-4">{uc.icon}</div>
            <h3 className="font-semibold text-lg mb-2 dark:text-gray-100">{uc.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">{uc.blurb}</p>
            <a href={uc.link} className="mt-2 text-indigo-600 dark:text-indigo-400 hover:underline">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
} 