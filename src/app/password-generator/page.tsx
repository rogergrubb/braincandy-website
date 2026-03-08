"use client";
import { useState, useCallback } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    let chars = "";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    if (!chars) return;
    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);
    setPassword(Array.from(arr, (v) => chars[v % chars.length]).join(""));
    setCopied(false);
  }, [length, upper, lower, numbers, symbols]);

  const copy = () => { navigator.clipboard.writeText(password); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  const strength = () => {
    let s = 0;
    if (upper) s += 26; if (lower) s += 26; if (numbers) s += 10; if (symbols) s += 26;
    const bits = Math.log2(Math.pow(s, length));
    if (bits > 80) return { label: "Very Strong", color: "text-green-600", bg: "bg-green-500", w: "w-full" };
    if (bits > 60) return { label: "Strong", color: "text-blue-600", bg: "bg-blue-500", w: "w-3/4" };
    if (bits > 40) return { label: "Medium", color: "text-yellow-600", bg: "bg-yellow-500", w: "w-1/2" };
    return { label: "Weak", color: "text-red-600", bg: "bg-red-500", w: "w-1/4" };
  };

  const s = strength();

  const Toggle = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) => (
    <label className="flex items-center gap-3 cursor-pointer">
      <div className={"w-10 h-6 rounded-full transition-colors " + (checked ? "bg-purple-600" : "bg-gray-300")} onClick={() => onChange(!checked)}>
        <div className={"w-5 h-5 bg-white rounded-full shadow transition-transform mt-0.5 " + (checked ? "translate-x-4 ml-0.5" : "translate-x-0.5")} />
      </div>
      <span className="text-gray-700">{label}</span>
    </label>
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Password Generator</h1>
      <p className="text-gray-600 mb-8">Generate strong, secure, random passwords. Customize length and character types for maximum security.</p>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="bg-gray-50 rounded-lg p-4 mb-6 flex items-center gap-3">
          <code className="flex-1 text-lg font-mono break-all">{password || "Click Generate"}</code>
          <button onClick={copy} className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm">{copied ? "Copied!" : "Copy"}</button>
        </div>
        {password && <div className="mb-6"><div className="flex justify-between text-sm mb-1"><span>Strength:</span><span className={s.color}>{s.label}</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className={s.bg + " h-2 rounded-full transition-all " + s.w} /></div></div>}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Length: {length}</label>
          <input type="range" min="4" max="64" value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full" />
          <div className="flex justify-between text-xs text-gray-400"><span>4</span><span>64</span></div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Toggle label="Uppercase (A-Z)" checked={upper} onChange={setUpper} />
          <Toggle label="Lowercase (a-z)" checked={lower} onChange={setLower} />
          <Toggle label="Numbers (0-9)" checked={numbers} onChange={setNumbers} />
          <Toggle label="Symbols (!@#$)" checked={symbols} onChange={setSymbols} />
        </div>
        <button onClick={generate} className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium text-lg">Generate Password</button>
      </div>
      <div className="prose max-w-none mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Why Use a Password Generator?</h2>
        <p className="text-gray-600 mt-4">Strong passwords are your first line of defense against unauthorized access. Our password generator creates cryptographically secure random passwords that are virtually impossible to guess or crack through brute force attacks.</p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">Password Security Tips</h3>
        <p className="text-gray-600">Use a unique password for every account. Aim for at least 16 characters. Include a mix of uppercase letters, lowercase letters, numbers, and symbols. Never reuse passwords across different websites or services.</p>
      </div>
    </div>
  );
}
