"use client";
import { useState } from "react";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(200);
  const qrUrl = text ? "https://api.qrserver.com/v1/create-qr-code/?size=" + size + "x" + size + "&data=" + encodeURIComponent(text) : "";

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">QR Code Generator</h1>
      <p className="text-gray-600 mb-8">Generate QR codes for URLs, text, Wi-Fi credentials, and more. Free, instant, and no signup required.</p>
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="mb-4"><label className="block text-sm font-medium text-gray-700 mb-2">Text or URL</label><input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter URL or text..." className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500" /></div>
        <div className="mb-6"><label className="block text-sm font-medium text-gray-700 mb-2">Size: {size}px</label><input type="range" min="100" max="500" value={size} onChange={e => setSize(Number(e.target.value))} className="w-full" /></div>
        {qrUrl && (
          <div className="text-center">
            <img src={qrUrl} alt="QR Code" className="mx-auto mb-4 rounded-lg" width={size} height={size} />
            <a href={qrUrl} download="qrcode.png" className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Download PNG</a>
          </div>
        )}
      </div>
      <div className="prose max-w-none mt-12"><h2 className="text-2xl font-bold text-gray-900">About QR Codes</h2><p className="text-gray-600 mt-4">QR (Quick Response) codes are two-dimensional barcodes that can store URLs, text, contact information, Wi-Fi credentials, and more. They can be scanned by any smartphone camera, making them perfect for sharing links, business cards, and promotional materials.</p></div>
    </div>
  );
}
