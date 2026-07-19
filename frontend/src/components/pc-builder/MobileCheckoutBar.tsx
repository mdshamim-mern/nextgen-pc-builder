import { motion, AnimatePresence } from "framer-motion";
import { Zap, ShoppingCart, ArrowRight } from "lucide-react";

interface MobileCheckoutBarProps {
  totalPrice: number;
  wattage: number;
  itemCount: number;
  onCheckout: () => void;
}

export default function MobileCheckoutBar({
  totalPrice,
  wattage,
  itemCount,
  onCheckout,
}: MobileCheckoutBarProps) {
  return (
    <AnimatePresence>
      {itemCount > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0a0a0a]/80 backdrop-blur-2xl border-t border-white/10 p-4 safe-area-bottom"
        >
          <div className="flex items-center justify-between max-w-md mx-auto gap-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white leading-none mb-1">
                ৳{totalPrice.toLocaleString()}
              </span>
              <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                  <ShoppingCart className="w-3 h-3 text-blue-400" />
                  {itemCount} Items
                </span>
                <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                  <Zap className="w-3 h-3 text-orange-400" />
                  {wattage}W
                </span>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-blue-900/30 active:scale-95"
            >
              Checkout
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}