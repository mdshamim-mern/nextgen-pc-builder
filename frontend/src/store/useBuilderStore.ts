import { create } from "zustand";
import { ComponentPart } from "@/utils/compatibilityLogic";

interface BuilderState {
  selectedParts: Record<string, ComponentPart | null>;
  totalPrice: number;
  totalWattage: number;
  setPart: (category: string, part: ComponentPart) => void;
  removePart: (category: string) => void;
  clearBuild: () => void;
}

const calculateTotals = (parts: Record<string, ComponentPart | null>) => {
  let price = 0;
  let wattage = 0;
  Object.values(parts).forEach((part) => {
    if (part) {
      price += part.price || 0;
      wattage += part.wattage || 0;
    }
  });
  return { price, wattage };
};

const initialParts = {
  CPU: null,
  Motherboard: null,
  RAM: null,
  GPU: null,
  Storage: null,
  PSU: null,
  Case: null,
};

export const useBuilderStore = create<BuilderState>((set) => ({
  selectedParts: initialParts,
  totalPrice: 0,
  totalWattage: 0,

  setPart: (category, part) =>
    set((state) => {
      const updatedParts = { ...state.selectedParts, [category]: part };
      const { price, wattage } = calculateTotals(updatedParts);
      return {
        selectedParts: updatedParts,
        totalPrice: price,
        totalWattage: wattage,
      };
    }),

  removePart: (category) =>
    set((state) => {
      const updatedParts = { ...state.selectedParts, [category]: null };
      const { price, wattage } = calculateTotals(updatedParts);
      return {
        selectedParts: updatedParts,
        totalPrice: price,
        totalWattage: wattage,
      };
    }),

  clearBuild: () =>
    set({
      selectedParts: initialParts,
      totalPrice: 0,
      totalWattage: 0,
    }),
}));