"use client";
import { useState } from "react";

const categories: Record<string, Record<string, number>> = {
  Length: { Meter: 1, Kilometer: 1000, Centimeter: 0.01, Millimeter: 0.001, Mile: 1609.34, Yard: 0.9144, Foot: 0.3048, Inch: 0.0254 },
  Weight: { Kilogram: 1, Gram: 0.001, Milligram: 0.000001, Pound: 0.453592, Ounce: 0.0283495, Ton: 1000 },
  Temperature: { Celsius: 1, Fahrenheit: 1, Kelvin: 1 },
  Volume: { Liter: 1, Milliliter: 0.001, Gallon: 3.78541, Quart: 0.946353, Cup: 0.236588, "Fluid Ounce": 0.0295735 },
  Area: { "Square Meter": 1, "Square Kilometer": 1000000, "Square Foot": 0.092903, "Square Yard": 0.836127, Acre: 4046.86, Hectare: 10000 },
};

export default function UnitConverter() {
  const [cat, setCat] = useState("Length");
  const [from, setFrom] = useState("Meter");
  const [to, setTo] = useState("Foot");
  const [val, setVal] = useState("1");

  const convert = () => {
    const v = parseFloat(val) || 0;
    if (cat === "Temperature") {
      if (from === "Celsius" && to === "Fahrenheit") return (v * 9/5 + 32).toFixed(4);
      if (from === "Fahrenheit" && to === "Celsius") return ((v - 32) * 5/9).toFixed(4);
      if (from === "Celsius" && to === "Kelvin") return (v + 273.15).toFixed(4);
      if (from === "Kelvin" && to === "Celsius") return (v - 273.15).toFixed(4);
      if (from === "Fahrenheit" && to === "Kelvin") return ((v - 32) * 5/9 + 273.15).toFixed(4);
      if (from === "Kelvin" && to === "Fahrenheit") return ((v - 273.15) * 9/5 + 32).toFixed(4);
      return v.toFixed(4);
    }
    const units = categories[cat];
    return ((v * units[from]) / units[to]).toFixed(6);
  };

  const units = Object.keys(categories[cat]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unit Converter</h1>
      <p className="text-gray-600 mb-8">Convert between units of length, weight, temperature, volume, and area. Fast, free, and accurate conversions.</p>
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex flex-wrap gap-2 mb-6">{Object.keys(categories).map(c => (<button key={c} onClick={() => { setCat(c); setFrom(Object.keys(categories[c])[0]); setTo(Object.keys(categories[c])[1]); }} className={"px-4 py-2 rounded-lg text-sm font-medium " + (cat === c ? "bg-purple-600 text-white" : "bg-gray-100 hover:bg-gray-200")}>{c}</button>))}</div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-2">From</label><select value={from} onChange={e => setFrom(e.target.value)} className="w-full px-4 py-3 border rounded-lg">{units.map(u => <option key={u} value={u}>{u}</option>)}</select></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">To</label><select value={to} onChange={e => setTo(e.target.value)} className="w-full px-4 py-3 border rounded-lg">{units.map(u => <option key={u} value={u}>{u}</option>)}</select></div>
        </div>
        <input type="number" value={val} onChange={e => setVal(e.target.value)} className="w-full px-4 py-3 border rounded-lg text-xl mb-4" />
        <div className="bg-purple-50 rounded-lg p-6 text-center">
          <span className="text-3xl font-bold text-purple-600">{convert()}</span>
          <span className="text-lg text-gray-600 ml-2">{to}</span>
        </div>
      </div>
      <div className="prose max-w-none mt-12"><h2 className="text-2xl font-bold text-gray-900">About Unit Conversion</h2><p className="text-gray-600 mt-4">Unit conversion is the process of converting a measurement from one unit to another. Our converter supports length, weight, temperature, volume, and area conversions between both metric and imperial units.</p></div>
    </div>
  );
}
