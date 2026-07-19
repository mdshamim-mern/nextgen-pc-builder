export interface ComponentPart {
  id: string;
  category: 'CPU' | 'Motherboard' | 'RAM' | 'GPU' | 'Storage' | 'PSU' | 'Case';
  name: string;
  socket?: string;
  memoryType?: string;
  formFactor?: string;
  wattage: number;
  price: number;
  image: string;
}

export const isCpuCompatibleWithMotherboard = (cpu: ComponentPart | null, motherboard: ComponentPart | null): boolean => {
  if (!cpu || !motherboard) return true;
  return cpu.socket === motherboard.socket;
};

export const isRamCompatibleWithMotherboard = (ram: ComponentPart | null, motherboard: ComponentPart | null): boolean => {
  if (!ram || !motherboard) return true;
  return ram.memoryType === motherboard.memoryType;
};

export const getCompatibleMotherboards = (motherboards: ComponentPart[], selectedCpu: ComponentPart | null): ComponentPart[] => {
  if (!selectedCpu) return motherboards;
  return motherboards.filter((board) => board.socket === selectedCpu.socket);
};

export const getCompatibleRAMs = (rams: ComponentPart[], selectedMotherboard: ComponentPart | null): ComponentPart[] => {
  if (!selectedMotherboard) return rams;
  return rams.filter((ram) => ram.memoryType === selectedMotherboard.memoryType);
};

export const getCompatibleCPUs = (cpus: ComponentPart[], selectedMotherboard: ComponentPart | null): ComponentPart[] => {
  if (!selectedMotherboard) return cpus;
  return cpus.filter((cpu) => cpu.socket === selectedMotherboard.socket);
};

export const calculateTotalWattage = (selectedParts: Record<string, ComponentPart | null>): number => {
  return Object.values(selectedParts).reduce((total, part) => {
    return total + (part?.wattage || 0);
  }, 0);
};

export const calculateTotalPrice = (selectedParts: Record<string, ComponentPart | null>): number => {
  return Object.values(selectedParts).reduce((total, part) => {
    return total + (part?.price || 0);
  }, 0);
};

export const checkSystemBottleneck = (cpu: ComponentPart | null, gpu: ComponentPart | null): { hasBottleneck: boolean; message: string } => {
  if (!cpu || !gpu) return { hasBottleneck: false, message: "" };

  const cpuTier = cpu.price > 30000 ? 3 : cpu.price > 15000 ? 2 : 1;
  const gpuTier = gpu.price > 60000 ? 3 : gpu.price > 30000 ? 2 : 1;

  if (gpuTier - cpuTier >= 2) {
    return { hasBottleneck: true, message: "CPU might bottleneck your GPU." };
  }
  
  if (cpuTier - gpuTier >= 2) {
    return { hasBottleneck: true, message: "GPU might bottleneck your CPU." };
  }

  return { hasBottleneck: false, message: "System is well balanced." };
};