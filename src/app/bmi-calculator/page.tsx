"use client";
import { useState } from "react";

export default function BMICalculator() {
  const [unit, setUnit] = useState<"imperial" | "metric">("imperial");
  const [feet, setFeet] = useState(""); const [inches, setInches] = useState("");
  const [cm, setCm] = useState(""); const [lbs, setLbs] = useState(""); const [kg, setKg] = useState("");

  const calcBMI = () => {
    let heightM: number, weightKg: number;
    if (unit === "imperial") {
      heightM = ((parseInt(feet || "0") * 12) + parseInt(inches || "0")) * 0.0254;
      weightKg = parseFloat(lbs || "0") * 0.453592;
    } else {
      heightM = parseInt(cm || "0") / 100;
      weightKg = parseFloat(kg || "0");
    }
    if (heightM <= 0 || weightKg <= 0) return null;
    return weightKg / (heightM * heightM);
  };

  const bmi = calcBMI();
  const getCategory = (b: number) => {
    if (b < 18.5) return { label: "Underweight", color: "text-blue-600", bg: "bg-blue-100" };
    if (b < 25) return { label: "Normal", color: "text-green-600", bg: "bg-green-100" };
    if (b < 30) return { label: "Overweight", color: "text-yellow-600", bg: "bg-yellow-100" };
    return { label: "Obese", color: "text-red-600", bg: "bg-red-100" };
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">BMI Calculator</h1>
      <p className="text-gray-600 mb-8">Calculate your Body Mass Index (BMI) to check if your weight is in a healthy range. Supports both imperial and metric units.</p>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex gap-2 mb-6">
          <button onClick={() => setUnit("imperial")} className={"flex-1 py-2 rounded-lg font-medium " + (unit === "imperial" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-700")}>Imperial (ft/lbs)</button>
          <button onClick={() => setUnit("metric")} className={"flex-1 py-2 rounded-lg font-medium " + (unit === "metric" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-700")}>Metric (cm/kg)</button>
        </div>
        {unit === "imperial" ? (
          <>
            <div className="mb-4"><label className="block text-sm font-medium text-gray-700 mb-2">Height</label><div className="flex gap-3"><input type="number" value={feet} onChange={e => setFeet(e.target.value)} placeholder="Feet" className="flex-1 px-4 py-3 border rounded-lg" /><input type="number" value={inches} onChange={e => setInches(e.target.value)} placeholder="Inches" className="flex-1 px-4 py-3 border rounded-lg" /></div></div>
            <div className="mb-6"><label className="block text-sm font-medium text-gray-700 mb-2">Weight (lbs)</label><input type="number" value={lbs} onChange={e => setLbs(e.target.value)} placeholder="Weight in pounds" className="w-full px-4 py-3 border rounded-lg" /></div>
          </>
        ) : (
          <>
            <div className="mb-4"><label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label><input type="number" value={cm} onChange={e => setCm(e.target.value)} placeholder="Height in cm" className="w-full px-4 py-3 border rounded-lg" /></div>
            <div className="mb-6"><label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label><input type="number" value={kg} onChange={e => setKg(e.target.value)} placeholder="Weight in kg" className="w-full px-4 py-3 border rounded-lg" /></div>
          </>
        )}
        {bmi && (
          <div className={"rounded-lg p-6 text-center " + getCategory(bmi).bg}>
            <div className="text-4xl font-bold mb-2">{bmi.toFixed(1)}</div>
            <div className={"text-xl font-semibold " + getCategory(bmi).color}>{getCategory(bmi).label}</div>
          </div>
        )}
        <div className="mt-6 space-y-2 text-sm">
          <div className="flex justify-between p-2 bg-blue-50 rounded"><span>Underweight</span><span>&lt; 18.5</span></div>
          <div className="flex justify-between p-2 bg-green-50 rounded"><span>Normal</span><span>18.5 - 24.9</span></div>
          <div className="flex justify-between p-2 bg-yellow-50 rounded"><span>Overweight</span><span>25.0 - 29.9</span></div>
          <div className="flex justify-between p-2 bg-red-50 rounded"><span>Obese</span><span>30.0+</span></div>
        </div>
      </div>
      <div className="prose max-w-none mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Understanding BMI</h2>
        <p className="text-gray-600 mt-4">Body Mass Index (BMI) is a simple measure that uses your height and weight to estimate whether your weight is healthy. It is calculated by dividing your weight in kilograms by your height in meters squared. While BMI is a useful screening tool, it does not directly measure body fat and should be considered alongside other health indicators.</p>
      </div>
    </div>
  );
}
