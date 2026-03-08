"use client";
import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPct, setTipPct] = useState(18);
  const [people, setPeople] = useState(1);

  const billAmt = parseFloat(bill) || 0;
  const tipAmt = billAmt * (tipPct / 100);
  const total = billAmt + tipAmt;
  const perPerson = people > 0 ? total / people : total;
  const tipPerPerson = people > 0 ? tipAmt / people : tipAmt;

  const presets = [10, 15, 18, 20, 25, 30];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tip Calculator</h1>
      <p className="text-gray-600 mb-8">Calculate tips and split bills easily. Perfect for restaurants, cafes, and dining out with friends.</p>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Bill Amount ($)</label>
          <input type="number" value={bill} onChange={(e) => setBill(e.target.value)} placeholder="0.00" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-xl" />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Tip: {tipPct}%</label>
          <div className="flex flex-wrap gap-2 mb-3">{presets.map(p => (<button key={p} onClick={() => setTipPct(p)} className={"px-4 py-2 rounded-lg text-sm font-medium " + (tipPct === p ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200")}>{p}%</button>))}</div>
          <input type="range" min="0" max="50" value={tipPct} onChange={(e) => setTipPct(Number(e.target.value))} className="w-full" />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Split Between</label>
          <div className="flex items-center gap-3">
            <button onClick={() => setPeople(Math.max(1, people - 1))} className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-xl font-bold">-</button>
            <span className="text-2xl font-bold w-12 text-center">{people}</span>
            <button onClick={() => setPeople(people + 1)} className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-xl font-bold">+</button>
            <span className="text-gray-500 text-sm">people</span>
          </div>
        </div>
        <div className="bg-purple-50 rounded-lg p-6 space-y-4">
          <div className="flex justify-between"><span className="text-gray-600">Tip Amount</span><span className="text-xl font-bold">${tipAmt.toFixed(2)}</span></div>
          <div className="flex justify-between"><span className="text-gray-600">Total</span><span className="text-xl font-bold">${total.toFixed(2)}</span></div>
          {people > 1 && <><hr className="border-purple-200" /><div className="flex justify-between"><span className="text-gray-600">Tip Per Person</span><span className="font-bold">${tipPerPerson.toFixed(2)}</span></div><div className="flex justify-between"><span className="text-gray-600">Total Per Person</span><span className="text-2xl font-bold text-purple-600">${perPerson.toFixed(2)}</span></div></>}
        </div>
      </div>
      <div className="prose max-w-none mt-12">
        <h2 className="text-2xl font-bold text-gray-900">How to Calculate Tips</h2>
        <p className="text-gray-600 mt-4">Our tip calculator makes it easy to determine how much to tip at restaurants, cafes, bars, and other service establishments. Simply enter your bill amount, select a tip percentage, and optionally split the bill among multiple people.</p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">Standard Tipping Guidelines</h3>
        <p className="text-gray-600">In the United States, the standard tip for restaurant service is typically 15-20% of the pre-tax bill. For exceptional service, 20-25% is common. For buffets and takeout, 10% is generally appropriate.</p>
      </div>
    </div>
  );
}
