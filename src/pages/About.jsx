import React from "react";

export default function About() {
  return (
    <div className="px-8 py-16">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8">About</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Mission & Vision</h2>
        <p className="text-gray-700">Our mission is to enable enterprise-grade, agentic AI for everyone. Traceable, auditable, and library-agnostic, Minions AI is built for the future of composable, secure, and extensible AI systems.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Team</h2>
        <div className="bg-indigo-50 border border-indigo-200 rounded p-4">[Team photos + bios placeholder]</div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Press</h2>
        <div className="bg-indigo-50 border border-indigo-200 rounded p-4">[Press logos & quotes placeholder]</div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Blog</h2>
        <a href="/blog" className="text-indigo-600 hover:underline">Read our latest posts</a>
      </section>
    </div>
  );
} 