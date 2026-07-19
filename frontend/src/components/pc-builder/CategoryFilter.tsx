"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = ["CPU", "Motherboard", "RAM", "GPU", "Storage", "PSU", "Case"]

export default function CategoryFilter() {
  const [active, setActive] = useState("CPU")

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
            active === cat 
              ? "bg-blue-600 text-white border-blue-600" 
              : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}