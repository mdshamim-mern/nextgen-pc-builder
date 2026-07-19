import Link from "next/link";
import { ArrowRight, Cpu, MonitorPlay, CircuitBoard, MemoryStick, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">AI-Powered PC Builder</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
            Build Your Dream PC <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Without the Guesswork
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Use our AI-driven builder to find 100% compatible parts, calculate power wattage, and get the absolute best performance for your budget.
          </p>

          <div className="max-w-2xl mx-auto mt-10">
            <div className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-2xl p-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all gap-2">
              <input
                type="text"
                placeholder="E.g., 50k budget for video editing and gaming..."
                className="flex-grow bg-transparent px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
                <Sparkles className="w-4 h-4" />
                Auto Build
              </button>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-center gap-4 text-gray-500">
            <span>or</span>
            <Link
              href="/build"
              className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-all group"
            >
              Start manual build 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </div>
      </section>

      {/* Featured Components Section */}
      <section className="px-6 py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Components</h2>
            <p className="text-gray-600">Premium parts for your next ultimate rig</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all hover:-translate-y-1 cursor-pointer">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Processors</h3>
              <p className="text-gray-600 text-sm">Intel & AMD latest generation CPUs for maximum performance.</p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-green-900/5 hover:border-green-200 transition-all hover:-translate-y-1 cursor-pointer">
              <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                <MonitorPlay className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Graphics Cards</h3>
              <p className="text-gray-600 text-sm">NVIDIA & AMD GPUs for ultimate 4K gaming and rendering.</p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-900/5 hover:border-purple-200 transition-all hover:-translate-y-1 cursor-pointer">
              <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                <CircuitBoard className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Motherboards</h3>
              <p className="text-gray-600 text-sm">ATX, Micro-ATX, and Mini-ITX boards with PCIe 5.0 support.</p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-orange-900/5 hover:border-orange-200 transition-all hover:-translate-y-1 cursor-pointer">
              <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                <MemoryStick className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Memory</h3>
              <p className="text-gray-600 text-sm">High-speed DDR4 & DDR5 RAM kits with low latency.</p>
            </div>
            
          </div>
        </div>
      </section>
      
    </div>
  );
}