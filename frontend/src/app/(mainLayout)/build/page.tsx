"use client";

import { useState } from "react";
import { Trash2, Plus, Zap, Cpu, MonitorPlay, CircuitBoard, MemoryStick, HardDrive, Power, Box, Settings2 } from "lucide-react";
import { useBuilderStore } from "@/store/useBuilderStore";
import Modal from "@/components/ui/modal";
import ComponentSelectionList from "@/components/pc-builder/ComponentSelectionList";
import WattageCalculator from "@/components/pc-builder/WattageCalculator";
import MobileCheckoutBar from "@/components/pc-builder/MobileCheckoutBar";
import { ComponentPart } from "@/utils/compatibilityLogic";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "CPU": return <Cpu className="w-6 h-6 text-blue-400" />;
    case "GPU": return <MonitorPlay className="w-6 h-6 text-green-400" />;
    case "Motherboard": return <CircuitBoard className="w-6 h-6 text-purple-400" />;
    case "RAM": return <MemoryStick className="w-6 h-6 text-orange-400" />;
    case "Storage": return <HardDrive className="w-6 h-6 text-red-400" />;
    case "PSU": return <Power className="w-6 h-6 text-yellow-400" />;
    case "Case": return <Box className="w-6 h-6 text-cyan-400" />;
    default: return <Settings2 className="w-6 h-6 text-gray-400" />;
  }
};

export default function BuildPage() {
  const { selectedParts, totalPrice, totalWattage, setPart, removePart } = useBuilderStore();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = Object.keys(selectedParts);
  const itemCount = Object.values(selectedParts).filter(Boolean).length;

  const dummyParts: ComponentPart[] = [
    { id: "1", category: "CPU", name: "Intel Core i7-14700K", price: 52000, wattage: 125, socket: "LGA1700", image: "" },
    { id: "2", category: "Motherboard", name: "MSI MAG Z790 TOMAHAWK WIFI", price: 34000, wattage: 40, socket: "LGA1700", memoryType: "DDR5", formFactor: "ATX", image: "" },
    { id: "3", category: "RAM", name: "Corsair Vengeance RGB 32GB DDR5", price: 16500, wattage: 10, memoryType: "DDR5", image: "" },
    { id: "4", category: "GPU", name: "NVIDIA GeForce RTX 4070 Super", price: 78000, wattage: 220, image: "" },
  ];

  const handleOpenModal = (category: string) => {
    setActiveCategory(category);
    setIsModalOpen(true);
  };

  const handleSelectPart = (part: ComponentPart) => {
    if (activeCategory) {
      setPart(activeCategory, part);
    }
    setIsModalOpen(false);
  };

  const availableParts = dummyParts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Custom PC Builder
              </h1>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl">
              <div className="flex flex-col divide-y divide-white/5">
                {categories.map((category) => {
                  const part = selectedParts[category];
                  return (
                    <div key={category} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                          {getCategoryIcon(category)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-200">{category}</h3>
                          {part ? (
                            <p className="text-sm text-gray-400 mt-1 line-clamp-1">{part.name}</p>
                          ) : (
                            <p className="text-sm text-gray-500 mt-1">No component selected</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 sm:ml-auto">
                        {part ? (
                          <>
                            <span className="font-bold text-lg hidden sm:block">৳{part.price.toLocaleString()}</span>
                            <button
                              onClick={() => removePart(category)}
                              className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => handleOpenModal(category)}
                            className="w-full sm:w-auto px-6 py-2.5 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                          >
                            <Plus className="w-4 h-4" />
                            Select
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-96 shrink-0 hidden lg:block">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-28 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                Build Summary
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-gray-400">
                  <span>Total Items</span>
                  <span className="text-white font-medium bg-white/10 px-2.5 py-1 rounded-md">{itemCount}</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span>Estimated Wattage</span>
                  <div className="flex items-center gap-1 text-orange-400 bg-orange-400/10 px-2.5 py-1 rounded-md border border-orange-400/20">
                    <Zap className="w-4 h-4" />
                    <span className="font-medium">{totalWattage}W</span>
                  </div>
                </div>
                
                <WattageCalculator />

                <div className="border-t border-white/10 pt-4 mt-6 flex justify-between items-end">
                  <span className="text-gray-400">Total Price</span>
                  <span className="font-bold text-3xl text-white">৳{totalPrice.toLocaleString()}</span>
                </div>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-900/30">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Select ${activeCategory}`}
      >
        <ComponentSelectionList
          items={availableParts}
          onSelect={handleSelectPart}
        />
      </Modal>

      <MobileCheckoutBar
        totalPrice={totalPrice}
        wattage={totalWattage}
        itemCount={itemCount}
        onCheckout={() => console.log("Proceeding to checkout")}
      />
    </div>
  );
}