"use client";
import { useState, useEffect, useRef } from "react";

export default function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (running && timeLeft > 0) {
      intervalRef.current = setInterval(() => setTimeLeft(t => { if (t <= 1) { setRunning(false); return 0; } return t - 1; }), 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running, timeLeft]);

  const start = () => { const total = hours * 3600 + minutes * 60 + seconds; if (total > 0) { setTimeLeft(total); setRunning(true); } };
  const pause = () => setRunning(false);
  const reset = () => { setRunning(false); setTimeLeft(0); };

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  const presets = [{ label: "1 min", h: 0, m: 1, s: 0 }, { label: "5 min", h: 0, m: 5, s: 0 }, { label: "10 min", h: 0, m: 10, s: 0 }, { label: "15 min", h: 0, m: 15, s: 0 }, { label: "25 min", h: 0, m: 25, s: 0 }, { label: "1 hour", h: 1, m: 0, s: 0 }];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Countdown Timer</h1>
      <p className="text-gray-600 mb-8">Set a countdown timer for any duration. Perfect for cooking, studying, workouts, and Pomodoro technique.</p>
      <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
        <div className="text-7xl font-mono font-bold text-gray-900 mb-8">{pad(h)}:{pad(m)}:{pad(s)}</div>
        {!running && timeLeft === 0 && (
          <>
            <div className="flex justify-center gap-4 mb-6">
              <div><label className="block text-sm text-gray-500 mb-1">Hours</label><input type="number" min="0" max="99" value={hours} onChange={e => setHours(Number(e.target.value))} className="w-20 px-3 py-2 border rounded-lg text-center text-xl" /></div>
              <div><label className="block text-sm text-gray-500 mb-1">Minutes</label><input type="number" min="0" max="59" value={minutes} onChange={e => setMinutes(Number(e.target.value))} className="w-20 px-3 py-2 border rounded-lg text-center text-xl" /></div>
              <div><label className="block text-sm text-gray-500 mb-1">Seconds</label><input type="number" min="0" max="59" value={seconds} onChange={e => setSeconds(Number(e.target.value))} className="w-20 px-3 py-2 border rounded-lg text-center text-xl" /></div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-6">{presets.map(p => <button key={p.label} onClick={() => { setHours(p.h); setMinutes(p.m); setSeconds(p.s); }} className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-purple-100 text-sm">{p.label}</button>)}</div>
          </>
        )}
        <div className="flex justify-center gap-3">
          {!running && timeLeft === 0 && <button onClick={start} className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-lg font-medium">Start</button>}
          {running && <button onClick={pause} className="px-8 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 text-lg font-medium">Pause</button>}
          {!running && timeLeft > 0 && <button onClick={() => setRunning(true)} className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-lg font-medium">Resume</button>}
          {timeLeft > 0 && <button onClick={reset} className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-lg font-medium">Reset</button>}
        </div>
      </div>
      <div className="prose max-w-none mt-12"><h2 className="text-2xl font-bold text-gray-900">About Countdown Timers</h2><p className="text-gray-600 mt-4">Countdown timers help you track time for various activities including cooking, exercising, studying with the Pomodoro technique, and timing presentations. Set your desired duration and the timer will count down to zero with a notification.</p></div>
    </div>
  );
}
