import React from "react";

const categories = ["Announcements", "Tutorials", "Case Studies"];
const posts = [
  { title: "Welcome to Minions AI", category: "Announcements" },
  { title: "How to Build a Recipe", category: "Tutorials" },
  { title: "ACME Bank Case Study", category: "Case Studies" },
  { title: "Integrating with OpenAI", category: "Tutorials" },
  { title: "Release v1.0.0", category: "Announcements" }
];

export default function Blog() {
  return (
    <div className="px-8 py-16">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8">Blog</h1>
      <div className="mb-6 flex gap-4">
        {categories.map((cat) => (
          <button key={cat} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 font-semibold">
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.title} className="bg-white border border-indigo-100 rounded-lg p-6 shadow flex flex-col">
            <span className="text-xs text-indigo-500 font-semibold mb-2">{post.category}</span>
            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
            <div className="flex-1" />
            <a href="#" className="mt-4 text-indigo-600 hover:underline">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
} 