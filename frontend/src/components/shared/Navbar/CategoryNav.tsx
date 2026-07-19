"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const categories = [
  { name: 'Desktop', href: '/category/desktop' },
  { name: 'Laptop', href: '/category/laptop' },
  { 
    name: 'Component', 
    href: '/category/component',
    hasMegaMenu: true,
    subBrands: ['Intel', 'AMD', 'MSI', 'ASUS', 'Gigabyte', 'Corsair', 'G.Skill', 'Samsung', 'Western Digital']
  },
  { name: 'Monitor', href: '/category/monitor' },
  { name: 'Power', href: '/category/power' },
  { name: 'Phone', href: '/category/phone' },
  { name: 'Tablet', href: '/category/tablet' },
  { name: 'Office Equipment', href: '/category/office-equipment' },
  { name: 'Camera', href: '/category/camera' },
  { name: 'Security', href: '/category/security' },
  { name: 'Networking', href: '/category/networking' },
  { name: 'Software', href: '/category/software' },
  { name: 'Server & Storage', href: '/category/server-storage' },
  { name: 'Accessories', href: '/category/accessories' },
  { name: 'Gadget', href: '/category/gadget' },
  { name: 'Gaming', href: '/category/gaming' },
  { name: 'TV', href: '/category/tv' },
  { name: 'Appliance', href: '/category/appliance' }
];

export default function CategoryNav() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm relative z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ul className="flex items-center gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide py-3">
          {categories.map((category) => (
            <li 
              key={category.name}
              className="relative group"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Link 
                href={category.href}
                className="text-[15px] font-bold text-gray-800 hover:text-blue-600 flex items-center gap-1 transition-colors"
              >
                {category.name}
                {category.hasMegaMenu && <ChevronDown className="w-4 h-4" />}
              </Link>

              {category.hasMegaMenu && hoveredCategory === category.name && (
                <div className="absolute top-full left-0 mt-3 w-[450px] bg-white border border-gray-100 shadow-2xl rounded-b-md p-6 grid grid-cols-3 gap-y-4 gap-x-6 z-50">
                  {category.subBrands?.map((brand) => (
                    <Link 
                      key={brand} 
                      href={`${category.href}?brand=${brand}`}
                      className="text-sm font-medium text-gray-600 hover:text-blue-600 hover:underline"
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}