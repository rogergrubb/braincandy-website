"use client";
import { useState } from "react";
import type { Metadata } from "next";

export default function PercentageCalculator() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [r3, setR3] = useState("");
  const [incFrom, setIncFrom] = useState("");
  const [incTo, setIncTo] = useState("");
  const [r4, setR4] = useState("");

  const calc1 = () => { if (val1 && val2) setR1(String(((parseFloat(val1) / 100) * parseFloat(val2)).toFixed(4))); };
  const calc2 = () => { if (val1 && val2) setR2(String(((parseFloat(val1) / parseFloat(val2)) * 100).toFixed(4))); };
  const calc3 = () => { if (val1 && val2) setR3(String((((parseFloat(val2) - parseFloat(val1)) / parseFloat(val1)) * 100).toFixed(4))); };
  const calc4 = () => { if (incFrom && incTo) setR4(String((((parseFloat(incTo) - parseFloat(incFrom)) / parseFloat(incFrom)) * 100).toFixed(4))); };

  const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      {children}
    </div>
  );

  const Input = ({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) => (
    <input type="number" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
      className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-center" />
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Percentage Calculator</h1>
      <p className="text-gray-600 mb-8">Free online percentage calculator. Calculate percentages, percentage of a number, percentage change, increase and decrease instantly.</p>

      <Card title="What is X% of Y?">
        <div className="flex items-center gap-3 flex-wrap">
          <span>What is</span> <Input value={val1} onChange={setVal1} placeholder="X" /> <span>% of</span> <Input value={val2} onChange={setVal2} placeholder="Y" /> <span>?</span>
          <button onClick={calc1} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Calculate</button>
          {r1 && <span className="text-xl font-bold text-purple-600">= {r1}</span>}
        </div>
      </Card>

      <Card title="X is what % of Y?">
        <div className="flex items-center gap-3 flex-wrap">
          <Input value={val1} onChange={setVal1} placeholder="X" /> <span>is what % of</span> <Input value={val2} onChange={setVal2} placeholder="Y" /> <span>?</span>
          <button onClick={calc2} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Calculate</button>
          {r2 && <span className="text-xl font-bold text-purple-600">= {r2}%</span>}
        </div>
      </Card>

      <Card title="Percentage Change">
        <div className="flex items-center gap-3 flex-wrap">
          <span>From</span> <Input value={incFrom} onChange={setIncFrom} placeholder="From" /> <span>to</span> <Input value={incTo} onChange={setIncTo} placeholder="To" />
          <button onClick={calc4} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Calculate</button>
          {r4 && <span className="text-xl font-bold text-purple-600">= {r4}%</span>}
        </div>
      </Card>

      <div className="prose max-w-none mt-12">
        <h2 className="text-2xl font-bold text-gray-900">How to Calculate Percentages</h2>
        <p className="text-gray-600 mt-4">A percentage is a way of expressing a number as a fraction of 100. The word comes from the Latin phrase "per centum" meaning "by the hundred." Percentages are used in everyday life for discounts, taxes, tips, statistics, and much more.</p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">Percentage Formula</h3>
        <p className="text-gray-600">To find X% of Y: multiply Y by X and divide by 100. For example, 25% of 200 = (200 x 25) / 100 = 50.</p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">Common Percentage Calculations</h3>
        <p className="text-gray-600">Our free percentage calculator handles all common percentage calculations including finding a percentage of a number, calculating what percentage one number is of another, and finding percentage increase or decrease between two values.</p>
      </div>
    </div>
  );
}
