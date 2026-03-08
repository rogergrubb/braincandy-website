"use client";
import { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const format = () => { try { setOutput(JSON.stringify(JSON.parse(input), null, 2)); setError(""); } catch (e: any) { setError(e.message); setOutput(""); } };
  const minify = () => { try { setOutput(JSON.stringify(JSON.parse(input))); setError(""); } catch (e: any) { setError(e.message); setOutput(""); } };
  const validate = () => { try { JSON.parse(input); setError(""); setOutput("Valid JSON!"); } catch (e: any) { setError("Invalid JSON: " + e.message); setOutput(""); } };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">JSON Formatter & Validator</h1>
      <p className="text-gray-600 mb-8">Format, validate, and beautify JSON data. Minify or prettify JSON with one click. Essential tool for developers.</p>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Input JSON</label><textarea value={input} onChange={e => setInput(e.target.value)} placeholder='{"key": "value"}' className="w-full h-64 p-4 font-mono text-sm border rounded-lg focus:ring-2 focus:ring-purple-500 resize-y" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Output</label><textarea value={output} readOnly className="w-full h-64 p-4 font-mono text-sm bg-gray-50 border rounded-lg resize-y" /></div>
      </div>
      {error && <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4 text-sm">{error}</div>}
      <div className="flex gap-3">
        <button onClick={format} className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Prettify</button>
        <button onClick={minify} className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">Minify</button>
        <button onClick={validate} className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Validate</button>
        <button onClick={() => navigator.clipboard.writeText(output)} className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Copy Output</button>
      </div>
      <div className="prose max-w-none mt-12"><h2 className="text-2xl font-bold text-gray-900">About JSON Formatting</h2><p className="text-gray-600 mt-4">JSON (JavaScript Object Notation) is the most widely used data interchange format on the web. Our JSON formatter helps developers quickly format, validate, and minify JSON data for debugging, API development, and data analysis.</p></div>
    </div>
  );
}
