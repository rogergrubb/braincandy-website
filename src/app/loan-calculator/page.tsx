"use client";
import { useState } from "react";

export default function LoanCalculator() {
  const [amount, setAmount] = useState("250000");
  const [rate, setRate] = useState("6.5");
  const [years, setYears] = useState("30");

  const principal = parseFloat(amount) || 0;
  const monthlyRate = (parseFloat(rate) || 0) / 100 / 12;
  const numPayments = (parseInt(years) || 0) * 12;

  let monthly = 0, totalPayment = 0, totalInterest = 0;
  if (principal > 0 && monthlyRate > 0 && numPayments > 0) {
    monthly = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    totalPayment = monthly * numPayments;
    totalInterest = totalPayment - principal;
  }

  const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Loan Calculator</h1>
      <p className="text-gray-600 mb-8">Calculate monthly payments, total interest, and total cost for any loan. Works for mortgages, auto loans, personal loans, and student loans.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="mb-5"><label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount ($)</label><input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full px-4 py-3 border rounded-lg text-lg" /></div>
          <div className="mb-5"><label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label><input type="number" step="0.1" value={rate} onChange={e => setRate(e.target.value)} className="w-full px-4 py-3 border rounded-lg text-lg" /></div>
          <div className="mb-5"><label className="block text-sm font-medium text-gray-700 mb-2">Loan Term (years)</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full px-4 py-3 border rounded-lg text-lg" /><div className="flex gap-2 mt-2">{[10,15,20,25,30].map(y => <button key={y} onClick={() => setYears(String(y))} className={"px-3 py-1 rounded text-sm " + (years === String(y) ? "bg-purple-600 text-white" : "bg-gray-100")}>{y}yr</button>)}</div></div>
        </div>
        <div className="bg-purple-50 rounded-xl p-6 flex flex-col justify-center">
          <div className="text-center mb-6"><span className="text-sm text-gray-500">Monthly Payment</span><div className="text-4xl font-bold text-purple-600">${fmt(monthly)}</div></div>
          <div className="space-y-4">
            <div className="flex justify-between"><span className="text-gray-600">Total Principal</span><span className="font-semibold">${fmt(principal)}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Total Interest</span><span className="font-semibold text-orange-600">${fmt(totalInterest)}</span></div>
            <hr className="border-purple-200" />
            <div className="flex justify-between"><span className="text-gray-600 font-medium">Total Cost</span><span className="font-bold text-lg">${fmt(totalPayment)}</span></div>
          </div>
          <div className="mt-6"><div className="w-full bg-purple-200 rounded-full h-4 overflow-hidden"><div className="bg-purple-600 h-4 rounded-full" style={{width: totalPayment > 0 ? (principal / totalPayment * 100) + "%" : "0%"}} /></div><div className="flex justify-between text-xs mt-1 text-gray-500"><span>Principal ({totalPayment > 0 ? (principal / totalPayment * 100).toFixed(0) : 0}%)</span><span>Interest ({totalPayment > 0 ? (totalInterest / totalPayment * 100).toFixed(0) : 0}%)</span></div></div>
        </div>
      </div>
      <div className="prose max-w-none mt-12">
        <h2 className="text-2xl font-bold text-gray-900">How Loan Payments Are Calculated</h2>
        <p className="text-gray-600 mt-4">Our loan calculator uses the standard amortization formula to determine your monthly payment. This formula takes into account the principal amount, the annual interest rate, and the loan term to calculate equal monthly payments that will fully pay off the loan by the end of the term.</p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">Tips for Getting the Best Loan Rates</h3>
        <p className="text-gray-600">Shop around with multiple lenders, improve your credit score before applying, consider making a larger down payment, and compare both fixed and variable rate options. Even a small reduction in interest rate can save thousands over the life of a loan.</p>
      </div>
    </div>
  );
}
