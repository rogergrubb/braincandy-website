"use client";
import { useState, useMemo } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, "").length;
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
    const paragraphs = text.trim() ? text.split(/\n\n+/).filter(p => p.trim()).length : 0;
    const readingTime = Math.ceil(words / 200);
    const speakingTime = Math.ceil(words / 130);
    return { words, chars, charsNoSpaces, sentences, paragraphs, readingTime, speakingTime };
  }, [text]);

  const Stat = ({ label, value }: { label: string; value: number | string }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center">
      <div className="text-2xl font-bold text-purple-600">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Word Counter</h1>
      <p className="text-gray-600 mb-8">Free online word counter tool. Count words, characters, sentences, paragraphs, and estimate reading time instantly.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
        <Stat label="Words" value={stats.words} />
        <Stat label="Characters" value={stats.chars} />
        <Stat label="No Spaces" value={stats.charsNoSpaces} />
        <Stat label="Sentences" value={stats.sentences} />
        <Stat label="Paragraphs" value={stats.paragraphs} />
        <Stat label="Reading (min)" value={stats.readingTime} />
        <Stat label="Speaking (min)" value={stats.speakingTime} />
      </div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Type or paste your text here..."
        className="w-full h-64 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-y text-gray-800" />
      <div className="flex gap-3 mt-4">
        <button onClick={() => setText("")} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Clear</button>
        <button onClick={() => navigator.clipboard.writeText(text)} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Copy Text</button>
      </div>
      <div className="prose max-w-none mt-12">
        <h2 className="text-2xl font-bold text-gray-900">About This Word Counter</h2>
        <p className="text-gray-600 mt-4">Our free word counter tool helps writers, students, and professionals track the length and complexity of their text. Simply type or paste your content above to see real-time statistics including word count, character count, sentence count, paragraph count, and estimated reading and speaking times.</p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">Why Word Count Matters</h3>
        <p className="text-gray-600">Word count is essential for academic papers, blog posts, social media content, and professional writing. Many platforms have specific word or character limits, making this tool invaluable for staying within bounds.</p>
      </div>
    </div>
  );
}
