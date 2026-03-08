"use client";
import { useState, useMemo } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const limits = [{ name: "Twitter/X", limit: 280 }, { name: "Instagram", limit: 2200 }, { name: "LinkedIn", limit: 3000 }, { name: "Facebook", limit: 63206 }, { name: "YouTube Title", limit: 100 }, { name: "Meta Description", limit: 160 }, { name: "SMS", limit: 160 }];
  const stats = useMemo(() => ({ chars: text.length, charsNoSpace: text.replace(/\s/g, "").length, words: text.trim() ? text.trim().split(/\s+/).length : 0, lines: text ? text.split("\n").length : 0 }), [text]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Character Counter</h1>
      <p className="text-gray-600 mb-8">Count characters with and without spaces. Check your text against social media character limits for Twitter, Instagram, LinkedIn, and more.</p>
      <div className="grid grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-xl shadow-sm border p-4 text-center"><div className="text-2xl font-bold text-purple-600">{stats.chars}</div><div className="text-xs text-gray-500">Characters</div></div>
        <div className="bg-white rounded-xl shadow-sm border p-4 text-center"><div className="text-2xl font-bold text-purple-600">{stats.charsNoSpace}</div><div className="text-xs text-gray-500">No Spaces</div></div>
        <div className="bg-white rounded-xl shadow-sm border p-4 text-center"><div className="text-2xl font-bold text-purple-600">{stats.words}</div><div className="text-xs text-gray-500">Words</div></div>
        <div className="bg-white rounded-xl shadow-sm border p-4 text-center"><div className="text-2xl font-bold text-purple-600">{stats.lines}</div><div className="text-xs text-gray-500">Lines</div></div>
      </div>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Type or paste your text here..." className="w-full h-48 p-4 border rounded-xl focus:ring-2 focus:ring-purple-500 resize-y mb-6" />
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Platform Limits</h3>
        <div className="space-y-3">{limits.map(l => (<div key={l.name} className="flex items-center gap-3"><span className="text-sm text-gray-600 w-32">{l.name}</span><div className="flex-1 bg-gray-100 rounded-full h-3"><div className={"h-3 rounded-full transition-all " + (stats.chars > l.limit ? "bg-red-500" : "bg-green-500")} style={{width: Math.min(100, (stats.chars / l.limit) * 100) + "%"}} /></div><span className="text-sm text-gray-500 w-20 text-right">{stats.chars}/{l.limit}</span></div>))}</div>
      </div>
      <div className="prose max-w-none mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Why Character Count Matters</h2>
        <p className="text-gray-600 mt-4">Different platforms have different character limits. Our character counter helps you stay within bounds for Twitter posts, Instagram captions, LinkedIn updates, meta descriptions, and SMS messages.</p>
      </div>
    </div>
  );
}
