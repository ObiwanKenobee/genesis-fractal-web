
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import RoadmapSection from '@/components/RoadmapSection';
import Footer from '@/components/Footer';
import FractalVisual from '@/components/FractalVisual';
import { ArchIcons } from '@/components/icons/ArchitectureIcons';

const Index = () => {
  // Foundation section items
  const foundationItems = [
    {
      title: 'Framework',
      description: 'Vite, React 18+ with Concurrent Mode, TypeScript with strict type safety',
      icon: <ArchIcons.Framework.Vite className="h-6 w-6 text-nature-gold" />,
    },
    {
      title: 'Backend API',
      description: 'GraphQL for flexible, efficient querying, gRPC for microservices, WebSockets with structured backpressure control',
      icon: <ArchIcons.Backend.GraphQL className="h-6 w-6 text-nature-sky" />,
    },
    {
      title: 'Authentication',
      description: 'Web3 Identity + JWT fallback, Covenant logic with smart contract user roles',
      icon: <ArchIcons.Auth.Web3 className="h-6 w-6 text-nature-leaf" />,
    }
  ];

  // Frontend section items
  const frontendItems = [
    {
      title: 'Layout Structure',
      description: 'Golden Ratio-based component grid (φ ≈ 1.618), Fractal dynamic nested routing',
      icon: <ArchIcons.Layout.GoldenRatio className="h-6 w-6 text-nature-gold" />,
    },
    {
      title: 'Rendering Engine',
      description: 'WebGPU UI Renderer with WebGL2 fallback, AI Preloading using entropy-driven prediction',
      icon: <ArchIcons.Rendering.WebGPU className="h-6 w-6 text-fractal-deep" />,
    },
    {
      title: 'Visual Theme',
      description: 'Organic, flowing designs with biomimetic UI, Dynamic light/dark mode transitions',
      icon: <ArchIcons.Visual.BiomimeticUI className="h-6 w-6 text-nature-leaf" />,
    }
  ];

  // Pipeline section items
  const pipelineItems = [
    {
      title: 'Custom Vite Plugins',
      description: 'WASM bundler, AssemblyScript compiler hooks',
      icon: <ArchIcons.VitePlugins.WASM className="h-6 w-6 text-nature-sky" />,
    },
    {
      title: 'Compiler Stack',
      description: 'LLVM + Emscripten optimizations, Auto-tree shaking (dead DNA removal)',
      icon: <ArchIcons.Compiler.LLVM className="h-6 w-6 text-fractal-mid" />,
    },
    {
      title: 'Self-Optimization',
      description: 'Deploy with Genetic Algorithm Tuning for performance improvements',
      icon: <ArchIcons.Optimization.Genetic className="h-6 w-6 text-nature-sunset" />,
    }
  ];

  // Data flow section items
  const dataFlowItems = [
    {
      title: 'Graph Theory Data Caching',
      description: 'Intelligent data pathways optimize network traffic, Real-time graphs for UI state',
      icon: <ArchIcons.GraphTheory.Caching className="h-6 w-6 text-nature-sky" />,
    },
    {
      title: 'Decentralized Storage',
      description: 'IPFS / OrbitDB for non-critical files like user-uploaded media',
      icon: <ArchIcons.Storage.Decentralized className="h-6 w-6 text-nature-earth" />,
    },
    {
      title: 'Edge Caching',
      description: 'CDN + AI-Based predictive cache invalidation using entropy models',
      icon: <ArchIcons.Storage.EdgeCaching className="h-6 w-6 text-fractal-light" />,
    }
  ];

  // Component architecture items
  const componentItems = [
    {
      title: 'Atoms',
      description: 'Buttons, icons, text inputs (styled with φ ratios)',
      icon: <ArchIcons.Optimization.Genetic className="h-6 w-6 text-nature-leaf" />,
    },
    {
      title: 'Molecules',
      description: 'Nav bars, card lists, sliders combined from basic atoms',
      icon: <ArchIcons.VitePlugins.WASM className="h-6 w-6 text-nature-sky" />,
    },
    {
      title: 'Organisms',
      description: 'User dashboard, blog feeds, charts built from molecules',
      icon: <ArchIcons.Layout.FractalRouting className="h-6 w-6 text-nature-gold" />,
    },
    {
      title: 'Templates',
      description: 'Dynamic pages: landing, profile, article templates',
      icon: <ArchIcons.Layout.GoldenRatio className="h-6 w-6 text-nature-sunset" />,
    },
    {
      title: 'Pages',
      description: 'Full route renders based on user identity/role',
      icon: <ArchIcons.Backend.GraphQL className="h-6 w-6 text-fractal-deep" />,
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Foundations Section */}
        <ArchitectureSection
          id="foundations"
          title="1. Foundations: Rock-Solid Core"
          subtitle="Building on the solid foundation of modern web technologies"
          quote="'Built on the rock' — Matthew 7:24"
          items={foundationItems}
          gradientClass="bg-gradient-earth"
        />
        
        {/* Frontend Section */}
        <ArchitectureSection
          id="frontend"
          title="2. Frontend Experience: Living, Breathing Nature"
          subtitle="Self-healing, efficient, beautiful interfaces inspired by natural patterns"
          items={frontendItems}
          gradientClass="bg-gradient-fractal"
        />
        
        {/* Fractal Visual Section */}
        <section className="py-16 relative overflow-hidden bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                  The Golden Ratio
                </h2>
                <p className="text-muted-foreground md:text-lg mb-6">
                  Our design system is built around the mathematical beauty of φ (phi), approximately 1.618, found throughout nature and classical architecture.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span>Component proportions follow the golden ratio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span>Animation timing based on fibonacci sequences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span>Layout grids incorporate golden rectangles</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 h-full flex items-center justify-center p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border">
                <FractalVisual />
              </div>
            </div>
          </div>
        </section>
        
        {/* Pipeline Section */}
        <ArchitectureSection
          id="pipeline"
          title="3. Pipeline & Build System: DNA-Like Flow"
          subtitle="Precision, replication, mutation - a build system that evolves"
          items={pipelineItems}
          gradientClass="bg-gradient-radial"
        />
        
        {/* Data Flow Section */}
        <ArchitectureSection
          id="data"
          title="4. Data Flow: Rivers of Information"
          subtitle="Fractal, distributed, efficient data management system"
          quote="Like rivers flowing through the landscape, optimizing paths of least resistance"
          items={dataFlowItems}
          gradientClass="bg-gradient-cosmos"
        />
        
        {/* Component Architecture Section */}
        <section id="components" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-golden opacity-10"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                5. Component Architecture: Tabernacle Blueprint
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Highly modular, fully reusable components inspired by atomic design
              </p>
              <div className="max-w-md mx-auto my-4 italic text-muted-foreground border-l-4 pl-4 border-accent">
                Follows Atomic Design Methodology — mirrors the Tabernacle's modular structure (Exodus 26).
              </div>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Component pyramid */}
              <div className="flex flex-col items-center">
                {/* Pages */}
                <div className="w-full md:w-4/5 p-4 bg-background/70 backdrop-blur-sm rounded-lg border border-accent/30 mb-2 transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <ArchIcons.Backend.GraphQL className="h-6 w-6 text-fractal-deep" />
                    <h3 className="font-bold">Pages</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Full route renders based on user identity/role</p>
                </div>
                
                {/* Templates */}
                <div className="w-full md:w-4/5 p-4 bg-background/70 backdrop-blur-sm rounded-lg border border-accent/30 mb-2 transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <ArchIcons.Layout.GoldenRatio className="h-6 w-6 text-nature-sunset" />
                    <h3 className="font-bold">Templates</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Dynamic pages: landing, profile, article templates</p>
                </div>
                
                {/* Organisms */}
                <div className="w-full md:w-3/4 p-4 bg-background/70 backdrop-blur-sm rounded-lg border border-accent/30 mb-2 transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <ArchIcons.Layout.FractalRouting className="h-6 w-6 text-nature-gold" />
                    <h3 className="font-bold">Organisms</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">User dashboard, blog feeds, charts built from molecules</p>
                </div>
                
                {/* Molecules */}
                <div className="w-full md:w-2/3 p-4 bg-background/70 backdrop-blur-sm rounded-lg border border-accent/30 mb-2 transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <ArchIcons.VitePlugins.WASM className="h-6 w-6 text-nature-sky" />
                    <h3 className="font-bold">Molecules</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Nav bars, card lists, sliders combined from basic atoms</p>
                </div>
                
                {/* Atoms */}
                <div className="w-full md:w-1/2 p-4 bg-background/70 backdrop-blur-sm rounded-lg border border-accent/30 transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <ArchIcons.Optimization.Genetic className="h-6 w-6 text-nature-leaf" />
                    <h3 className="font-bold">Atoms</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Buttons, icons, text inputs (styled with φ ratios)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Roadmap Section */}
        <RoadmapSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
