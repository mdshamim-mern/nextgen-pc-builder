import Link from 'next/link';
import { Search, ShoppingCart, User, Heart, GitCompare } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-100 py-4 px-4 md:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        
        <Link href="/" className="flex-shrink-0">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
            NextGen <span className="text-blue-600">PC</span>
          </h1>
        </Link>

        <div className="hidden flex-grow max-w-2xl relative md:flex items-center">
          <input
            type="text"
            placeholder="Search for Components..."
            className="w-full py-2.5 pl-5 pr-12 rounded-full bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
          />
          <button className="absolute right-1 top-1 h-[calc(100%-8px)] px-5 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center justify-center">
            <Search className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-7">
            
            <button className="flex flex-col items-center gap-1 group">
              <div className="relative">
                <GitCompare className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-white shadow-sm">0</span>
              </div>
              <span className="text-[11px] font-medium text-gray-500 group-hover:text-blue-600 transition-colors">Compare</span>
            </button>

            <button className="flex flex-col items-center gap-1 group">
              <div className="relative">
                <Heart className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-white shadow-sm">0</span>
              </div>
              <span className="text-[11px] font-medium text-gray-500 group-hover:text-blue-600 transition-colors">Saved</span>
            </button>

            <button className="flex flex-col items-center gap-1 group">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-white shadow-sm">2</span>
              </div>
              <span className="text-[11px] font-medium text-gray-500 group-hover:text-blue-600 transition-colors">Cart</span>
            </button>

            <button className="flex flex-col items-center gap-1 group">
              <div className="relative">
                <User className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="text-[11px] font-medium text-gray-500 group-hover:text-blue-600 transition-colors">Account</span>
            </button>
            
          </div>

          <Link href="/build">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2.5 rounded-full font-medium shadow-md shadow-blue-600/20 transition-all flex items-center gap-2">
              PC Builder
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}