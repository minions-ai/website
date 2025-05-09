import React from "react";

const steps = [
  "Define Agent Recipe",
  "Model Invocation",
  "Dynamic Orchestration",
  "Evaluation & Feedback"
];

export default function HowItWorks() {
  return (
    <div className="px-8 py-16">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8">How It Works</h1>
      <div className="flex gap-4 mb-12">
        {steps.map((step, idx) => (
          <div
            key={step}
            className="flex-1 border-2 border-dashed border-indigo-300 rounded-lg h-24 flex items-center justify-center bg-white text-lg font-semibold text-indigo-700"
          >
            {idx + 1}. {step}
          </div>
        ))}
      </div>
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 flex flex-col items-center">
        <div className="mb-4 text-indigo-700 font-semibold">Code Sandbox Embed</div>
        <div className="w-full h-48 bg-white border-2 border-dashed border-indigo-300 rounded flex items-center justify-center text-indigo-400">
          Live "hello world" recipe JSON + run button (placeholder)
        </div>
      </div>
    </div>
  );
} 