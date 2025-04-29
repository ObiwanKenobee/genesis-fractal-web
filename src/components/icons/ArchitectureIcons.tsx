
import React from 'react';
import { 
  LucideProps,
  Blocks, 
  Layers, 
  Globe, 
  Code, 
  BarChart, 
  Fingerprint, 
  Rocket,
  Network, 
  Workflow,
  LineChart,
  Palette,
  Lock,
  Atom,
  Pipette,
  Cpu,
  Database,
  Share2,
  CloudCog,
  Timer,
  Layout,
  Puzzle
} from 'lucide-react';

export const ViteIcon: React.FC<LucideProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18.83 13a24.55 24.55 0 0 1-1.91 5.61c-.8 1.53-1.65 2.39-2.42 2.39s-.76-.63-1.22-1.95c-.46-1.32-.7-3.22-.7-5.72s.24-4.42.72-5.77c.48-1.35.96-2.03 1.43-2.03.47 0 1.12.89 1.94 2.67.83 1.78 1.53 4.07 2.16 6.8Z" />
      <path d="M12.5 5.3 7.89 4 5 15.5 8.55 17l2.54-8.2" />
    </svg>
  );
};

export const ReactIcon: React.FC<LucideProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="2" />
      <path d="M19.13 4.66a9.56 9.56 0 0 0-9.13 2.2 9.56 9.56 0 0 0-2.2 9.13 9.56 9.56 0 0 0 9.13-2.2 9.56 9.56 0 0 0 2.2-9.13" />
      <path d="M4.66 19.13a9.56 9.56 0 0 0 9.13-2.2 9.56 9.56 0 0 0 2.2-9.13 9.56 9.56 0 0 0-9.13 2.2 9.56 9.56 0 0 0-2.2 9.13" />
    </svg>
  );
};

export const TypeScriptIcon: React.FC<LucideProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.5 7H18V17.5" />
      <path d="M18 12H14.5" />
      <path d="M9.5 7H4.5V9.5H9.5" />
      <path d="M7 17V9.5" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  );
};

// Export all icons in an organized way
export const ArchIcons = {
  // Foundations
  Framework: {
    Vite: ViteIcon,
    React: ReactIcon,
    TypeScript: TypeScriptIcon,
  },
  Backend: {
    GraphQL: Network,
    Grpc: Share2,
    WebSockets: Globe,
  },
  Auth: {
    Web3: Fingerprint,
    SmartContract: Lock,
  },
  
  // Frontend
  Layout: {
    GoldenRatio: Layout,
    FractalRouting: Puzzle,
  },
  Rendering: {
    WebGPU: Cpu,
    AIPreloading: Rocket,
  },
  Visual: {
    BiomimeticUI: Pipette,
    DarkLight: Palette,
  },
  
  // Pipeline
  VitePlugins: {
    WASM: Blocks,
    AssemblyScript: Code,
  },
  Compiler: {
    LLVM: Layers,
    TreeShaking: Workflow,
  },
  Optimization: {
    Genetic: Atom,
    Performance: Timer,
  },
  
  // Data flow
  GraphTheory: {
    Caching: LineChart,
    RealTime: BarChart,
  },
  Storage: {
    Decentralized: Database,
    EdgeCaching: CloudCog,
  }
};
