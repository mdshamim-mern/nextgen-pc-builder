import { Button } from "../ui/button";
import { Image as ImageIcon } from "lucide-react";

interface ComponentCardProps {
  name: string;
  brand: string;
  price: number;
  type: string;
  image?: string;
  onSelect?: () => void;
}

export default function ComponentCard({ name, brand, price, type, image, onSelect }: ComponentCardProps) {
  return (
    <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl hover:bg-white/[0.08] hover:border-blue-500/40 transition-all duration-300 shadow-lg shadow-black/20">
      <div className="flex items-center gap-4 mb-4 sm:mb-0">
        <div className="w-16 h-16 bg-[#0a0a0a]/50 rounded-lg flex items-center justify-center overflow-hidden border border-white/5 shrink-0">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-contain p-1.5 group-hover:scale-110 transition-transform duration-500" 
            />
          ) : (
            <ImageIcon className="w-6 h-6 text-gray-600" />
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-100 line-clamp-1 group-hover:text-blue-400 transition-colors">
            {name}
          </h4>
          <p className="text-sm text-gray-400 mt-0.5">
            {brand} <span className="mx-1.5 text-gray-600">&bull;</span> {type}
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-between sm:justify-end gap-6 sm:ml-4 border-t border-white/5 sm:border-t-0 pt-4 sm:pt-0">
        <p className="font-bold text-white text-lg tracking-tight">
          ৳{price.toLocaleString()}
        </p>
        <Button 
          onClick={onSelect} 
          variant="outline" 
          className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/20 hover:border-blue-500/40 hover:text-blue-300 transition-all"
        >
          Add
        </Button>
      </div>
    </div>
  );
}