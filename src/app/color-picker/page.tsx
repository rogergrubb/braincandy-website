"use client";
import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#6366f1");
  const hexToRgb = (hex: string) => { const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16); return { r, g, b }; };
  const rgb = hexToRgb(color);
  const hsl = (() => { let r=rgb.r/255,g=rgb.g/255,b=rgb.b/255; const max=Math.max(r,g,b),min=Math.min(r,g,b); let h=0,s=0,l=(max+min)/2; if(max!==min){const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=((g-b)/d+(g<b?6:0))/6;break;case g:h=((b-r)/d+2)/6;break;case b:h=((r-g)/d+4)/6;break;}} return {h:Math.round(h*360),s:Math.round(s*100),l:Math.round(l*100)}; })();
  const copy = (t: string) => navigator.clipboard.writeText(t);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Color Picker</h1>
      <p className="text-gray-600 mb-8">Pick any color and get HEX, RGB, and HSL values. Copy color codes with one click.</p>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex gap-6 items-start mb-6">
          <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-32 h-32 rounded-lg cursor-pointer border-0" />
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2"><span className="text-sm text-gray-500 w-12">HEX</span><code className="flex-1 bg-gray-50 px-3 py-2 rounded">{color.toUpperCase()}</code><button onClick={() => copy(color.toUpperCase())} className="px-3 py-2 bg-purple-100 text-purple-700 rounded text-sm">Copy</button></div>
            <div className="flex items-center gap-2"><span className="text-sm text-gray-500 w-12">RGB</span><code className="flex-1 bg-gray-50 px-3 py-2 rounded">rgb({rgb.r}, {rgb.g}, {rgb.b})</code><button onClick={() => copy("rgb("+rgb.r+", "+rgb.g+", "+rgb.b+")")} className="px-3 py-2 bg-purple-100 text-purple-700 rounded text-sm">Copy</button></div>
            <div className="flex items-center gap-2"><span className="text-sm text-gray-500 w-12">HSL</span><code className="flex-1 bg-gray-50 px-3 py-2 rounded">hsl({hsl.h}, {hsl.s}%, {hsl.l}%)</code><button onClick={() => copy("hsl("+hsl.h+", "+hsl.s+"%, "+hsl.l+"%)")} className="px-3 py-2 bg-purple-100 text-purple-700 rounded text-sm">Copy</button></div>
          </div>
        </div>
        <div className="w-full h-20 rounded-lg" style={{ backgroundColor: color }} />
      </div>
      <div className="prose max-w-none mt-12">
        <h2 className="text-2xl font-bold text-gray-900">About Color Codes</h2>
        <p className="text-gray-600 mt-4">Colors on the web can be represented in multiple formats. HEX codes are the most common format used in CSS and web design. RGB values specify the red, green, and blue components, while HSL uses hue, saturation, and lightness for a more intuitive color selection.</p>
      </div>
    </div>
  );
}
