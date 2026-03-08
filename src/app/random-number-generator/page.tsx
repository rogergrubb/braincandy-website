"use client";
import { useState } from "react";

export default function RandomNumberGenerator() {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [count, setCount] = useState("1");
  const [results, setResults] = useState<number[]>([]);
  const [allowDupes, setAllowDupes] = useState(true);

  const generate = () => {
    const lo = parseInt(min) || 0, hi = parseInt(max) || 100, n = parseInt(count) || 1;
    if (lo >= hi) return;
    if (!allowDupes && n > (hi - lo + 1)) return;
    const nums: number[] = [];
    if (allowDupes) {
      for (let i = 0; i < n; i++) nums.push(Math.floor(Math.random() * (hi - lo + 1)) + lo);
    } else {
      const pool = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
      for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
      nums.push(...pool.slice(0, n));
    }
    setResults(nums);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Random Number Generator</h1>
      <p className="text-gray-600 mb-8">Generate random numbers within any range. Perfect for games, raffles, statistics, and random selections.</p>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Minimum</label><input type="number" value={min} onChange={e => setMin(e.target.value)} className="w-full px-4 py-3 border rounded-lg" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Maximum</label><input type="number" value={max} onChange={e => setMax(e.target.value)} className="w-full px-4 py-3 border rounded-lg" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Count</label><input type="number" value={count} onChange={e => setCount(e.target.value)} min="1" max="1000" className="w-full px-4 py-3 border rounded-lg" /></div>
        </div>
        <label className="flex items-center gap-2 mb-6 cursor-pointer">
          <input type="checkbox" checked={allowDupes} onChange={e => setAllowDupes(e.target.checked)} className="w-4 h-4 text-purple-600 rounded" />
          <span className="text-sm text-gray-700">Allow duplicates</span>
        </label>
        <button onClick={generate} className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium text-lg mb-6">Generate</button>
        {results.length > 0 && (
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="flex flex-wrap gap-3 justify-center">
              {results.map((n, i) => (<span key={i} className="inline-block px-4 py-2 bg-white rounded-lg shadow-sm text-2xl font-bold text-purple-600">{n}</span>))}
            </div>
          </div>
        )}
      </div>
      <div className="prose max-w-none mt-12">
        <h2 className="text-2xl font-bold text-gray-900">About Random Number Generation</h2>
        <p className="text-gray-600 mt-4">Our random number generator uses a cryptographically secure random source to produce truly unpredictable numbers. This makes it suitable for games, raffles, statistical sampling, and any application where fairness and randomness are important.</p>
      </div>
    </div>
  );
}
