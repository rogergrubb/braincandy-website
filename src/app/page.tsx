import Link from "next/link";

const tools = [
  { name: "Percentage Calculator", href: "/percentage-calculator", icon: "%", desc: "Calculate percentages, increases, decreases, and differences between values instantly.", color: "from-blue-500 to-cyan-400" },
  { name: "Word Counter", href: "/word-counter", icon: "Aa", desc: "Count words, characters, sentences, and paragraphs in your text. Estimate reading time.", color: "from-purple-500 to-pink-400" },
  { name: "Password Generator", href: "/password-generator", icon: "🔒", desc: "Generate strong, secure passwords with customizable length and character options.", color: "from-green-500 to-emerald-400" },
  { name: "QR Code Generator", href: "/qr-code-generator", icon: "📱", desc: "Create QR codes for URLs, text, Wi-Fi, and more. Download as PNG or SVG.", color: "from-orange-500 to-red-400" },
  { name: "Color Picker", href: "/color-picker", icon: "🎨", desc: "Pick colors, convert between HEX, RGB, and HSL. Generate beautiful palettes.", color: "from-pink-500 to-rose-400" },
  { name: "Unit Converter", href: "/unit-converter", icon: "📐", desc: "Convert between units of length, weight, temperature, volume, and more.", color: "from-indigo-500 to-blue-400" },
  { name: "Tip Calculator", href: "/tip-calculator", icon: "💰", desc: "Calculate tips and split bills easily. Perfect for dining out with friends.", color: "from-yellow-500 to-amber-400" },
  { name: "BMI Calculator", href: "/bmi-calculator", icon: "⚖️", desc: "Calculate your Body Mass Index and find your healthy weight range.", color: "from-teal-500 to-cyan-400" },
  { name: "Random Number Generator", href: "/random-number-generator", icon: "🎲", desc: "Generate random numbers within any range. Perfect for games and decisions.", color: "from-violet-500 to-purple-400" },
  { name: "Countdown Timer", href: "/countdown-timer", icon: "⏱️", desc: "Set countdown timers for any event. Track time remaining with precision.", color: "from-red-500 to-orange-400" },
  { name: "Character Counter", href: "/character-counter", icon: "📝", desc: "Count characters with and without spaces. Perfect for social media posts.", color: "from-sky-500 to-blue-400" },
  { name: "Loan Calculator", href: "/loan-calculator", icon: "🏦", desc: "Calculate monthly payments, total interest, and amortization schedules.", color: "from-emerald-500 to-green-400" },
  { name: "Age Calculator", href: "/age-calculator", icon: "📅", desc: "Calculate your exact age in years, months, days, hours, and minutes.", color: "from-fuchsia-500 to-pink-400" },
  { name: "JSON Formatter", href: "/json-formatter", icon: "{}", desc: "Format, validate, and beautify JSON data. Minify or prettify with one click.", color: "from-slate-500 to-gray-400" },
  { name: "Case Converter", href: "/case-converter", icon: "aA", desc: "Convert text between uppercase, lowercase, title case, and more.", color: "from-amber-500 to-yellow-400" },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Free Online <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Tools</span> for Everyone
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Simple, fast, and free utility tools for everyday tasks. No signup required. Just pick a tool and get started.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200 text-left">
              <div className={"w-12 h-12 rounded-lg bg-gradient-to-br " + tool.color + " flex items-center justify-center text-white text-xl font-bold mb-4 group-hover:scale-110 transition-transform"}>
                {tool.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{tool.name}</h2>
              <p className="text-sm text-gray-500">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Use BrainCandy?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">All tools run instantly in your browser. No waiting, no loading screens.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">100% Private</h3>
            <p className="text-gray-600">Your data never leaves your browser. We don't store or track anything.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🆓</div>
            <h3 className="text-xl font-semibold mb-2">Always Free</h3>
            <p className="text-gray-600">Every tool is completely free to use. No signup, no limits, no catches.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
