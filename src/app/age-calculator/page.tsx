"use client";
import { useState } from "react";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [target, setTarget] = useState(new Date().toISOString().split("T")[0]);

  const calc = () => {
    if (!dob) return null;
    const d1 = new Date(dob), d2 = new Date(target || Date.now());
    let years = d2.getFullYear() - d1.getFullYear();
    let months = d2.getMonth() - d1.getMonth();
    let days = d2.getDate() - d1.getDate();
    if (days < 0) { months--; days += new Date(d2.getFullYear(), d2.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    const totalDays = Math.floor((d2.getTime() - d1.getTime()) / 86400000);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = totalDays * 24;
    return { years, months, days, totalDays, totalWeeks, totalHours };
  };

  const age = calc();

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Age Calculator</h1>
      <p className="text-gray-600 mb-8">Calculate your exact age in years, months, days, weeks, and hours. Find the time between any two dates.</p>
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label><input type="date" value={dob} onChange={e => setDob(e.target.value)} className="w-full px-4 py-3 border rounded-lg" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Age at Date</label><input type="date" value={target} onChange={e => setTarget(e.target.value)} className="w-full px-4 py-3 border rounded-lg" /></div>
        </div>
        {age && (
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="text-center mb-6"><span className="text-5xl font-bold text-purple-600">{age.years}</span><span className="text-xl text-gray-600 ml-2">years</span><span className="text-3xl font-bold text-purple-400 ml-4">{age.months}</span><span className="text-lg text-gray-600 ml-2">months</span><span className="text-3xl font-bold text-purple-400 ml-4">{age.days}</span><span className="text-lg text-gray-600 ml-2">days</span></div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div><div className="font-bold text-gray-900">{age.totalDays.toLocaleString()}</div><div className="text-sm text-gray-500">Total Days</div></div>
              <div><div className="font-bold text-gray-900">{age.totalWeeks.toLocaleString()}</div><div className="text-sm text-gray-500">Total Weeks</div></div>
              <div><div className="font-bold text-gray-900">{age.totalHours.toLocaleString()}</div><div className="text-sm text-gray-500">Total Hours</div></div>
            </div>
          </div>
        )}
      </div>
      <div className="prose max-w-none mt-12"><h2 className="text-2xl font-bold text-gray-900">How Age Is Calculated</h2><p className="text-gray-600 mt-4">Our age calculator determines your exact age by computing the difference between your date of birth and the target date. It accounts for varying month lengths and leap years to give you a precise result in years, months, and days.</p></div>
    </div>
  );
}
