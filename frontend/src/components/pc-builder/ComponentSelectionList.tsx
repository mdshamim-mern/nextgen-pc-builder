import { Plus, Zap, Settings2 } from "lucide-react";
import { ComponentPart } from "@/utils/compatibilityLogic";

interface ComponentSelectionListProps {
  items: ComponentPart[];
  onSelect: (item: ComponentPart) => void;
}

export default function ComponentSelectionList({ items, onSelect }: ComponentSelectionListProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-500">
        <Settings2 className="w-12 h-12 mb-4 opacity-20" />
        <p>No compatible components found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="group flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all"
        >
          <div className="relative w-full sm:w-32 h-32 bg-black/50 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center border border-white/5">
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="object-contain w-full h-full p-2 group-hover:scale-105 transition-transform"
              />
            ) : (
              <Settings2 className="w-8 h-8 text-gray-600" />
            )}
          </div>

          <div className="flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-white font-medium text-sm md:text-base line-clamp-2">
                {item.name}
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.socket && (
                  <span className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {item.socket}
                  </span>
                )}
                {item.memoryType && (
                  <span className="text-xs px-2 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    {item.memoryType}
                  </span>
                )}
                {item.formFactor && (
                  <span className="text-xs px-2 py-1 rounded-md bg-green-500/10 text-green-400 border border-green-500/20">
                    {item.formFactor}
                  </span>
                )}
                <span className="text-xs px-2 py-1 rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  {item.wattage}W
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 sm:mt-0 pt-3 border-t border-white/5">
              <span className="text-lg font-bold text-white">
                ৳{item.price.toLocaleString()}
              </span>
              <button
                onClick={() => onSelect(item)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg shadow-blue-900/20"
              >
                <Plus className="w-4 h-4" />
                Select
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}