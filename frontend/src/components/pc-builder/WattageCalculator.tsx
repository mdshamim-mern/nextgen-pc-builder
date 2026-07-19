"use client";

import { useBuilderStore } from "@/store/useBuilderStore";
import { motion } from "framer-motion";

export default function WattageCalculator() {
  const { totalWattage } = useBuilderStore();
  
  const maxWattage = 1200;
  const percentage = Math.min((totalWattage / maxWattage) * 100, 100);

  let barColor = "#374151"; 
  
  if (totalWattage >= 800) {
    barColor = "#ef4444"; 
  } else if (totalWattage >= 500) {
    barColor = "#f97316"; 
  } else if (totalWattage > 0) {
    barColor = "#22c55e"; 
  }

  return (
    <div className="w-full pt-2">
      <div className="h-2 w-full bg-[#1a1a1a] rounded-full overflow-hidden border border-white/5 shadow-inner">
        <motion.div
          initial={{ width: 0, backgroundColor: "#374151" }}
          animate={{ width: `${percentage}%`, backgroundColor: barColor }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ boxShadow: `0 0 15px ${barColor}80` }}
        />
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-500 font-medium px-1">
        <span>0W</span>
        <span>{maxWattage}W Limit</span>
      </div>
    </div>
  );
}