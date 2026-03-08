"use client";
import { useState } from "react";

export default function CaseConverter() {
  const [text, setText] = useState("");

  const convert = (type: string) => {
    switch (type) {
      case "upper": return text.toUpperCase();
      case "lower": return text.toLowerCase();
      case "title": return text.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase());
      case "sentence": return text.toLowerCase().replace(/(^|[.!?]\s+)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
      case "camel": return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, c) => c.toUpperCase());
      case "pascal": return text.toLowerCase().replace(/(^|[^a-zA-Z0-9]+)(.)/g, (m, p1, c) => c.toUpperCase());
      case "snake": return text.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
      case "kebab": return text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      case "toggle": return text.split("").map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join("");
      case "reverse": return text.split("").reverse().join("");
      default: return text;
    }
  };

  const buttons = [
    { label: "UPPERCASE", type: "upper" }, { label: "lowercase", type: "lower" },
    { label: "Title Case", type: "title" }, { label: "Sentence case", type: "sentence" },
    { label: "camelCase", type: "camel" }, { label: "PascalCase", type: "pascal" },
    { label: "snake_case", type: "snake" }, { label: "kebab-case", type: "kebab" },
    { label: "tOGGLE cASE", type: "toggle" }, { label: "esreveR", type: "reverse" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Converter</h1>
      <p className="text-gray-600 mb-8">Convert text between different cases: uppercase, lowercase, title case, camelCase, snake_case, kebab-case, and more.</p>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Type or paste your text here..."
          className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 resize-y mb-4" />
        <div className="flex flex-wrap gap-2 mb-4">
          {buttons.map(b => (<button key={b.type} onClick={() => setText(convert(b.type))} className="px-4 py-2 bg-gray-100 hover:bg-purple-100 hover:text-purple-700 rounded-lg text-sm font-medium transition-colors">{b.label}</button>))}
        </div>
        <div className="flex gap-3">
          <button onClick={() => setText("")} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Clear</button>
          <button onClick={() => navigator.clipboard.writeText(text)} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Copy</button>
        </div>
      </div>
      <div className="prose max-w-none mt-12">
        <h2 className="text-2xl font-bold text-gray-900">About Case Conversion</h2>
        <p className="text-gray-600 mt-4">Text case conversion is essential for programmers, writers, and content creators. Whether you need to convert variable names between camelCase and snake_case, or format headings in title case, our tool handles it all instantly.</p>
      </div>
    </div>
  );
}
