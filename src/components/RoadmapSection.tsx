
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Clock } from 'lucide-react';

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  complete?: boolean;
}

const RoadmapSection = () => {
  const roadmapItems: RoadmapItem[] = [
    {
      phase: "Phase 1",
      title: "MVP Site Setup",
      description: "Static pages, authentication ready",
      complete: true,
    },
    {
      phase: "Phase 2",
      title: "WebGPU Renderer + AI Prefetch",
      description: "Ultra-fast dynamic loading",
      complete: false,
    },
    {
      phase: "Phase 3",
      title: "Smart Contract Identity",
      description: "Fully decentralized onboarding",
      complete: false,
    },
    {
      phase: "Phase 4",
      title: "Decentralized Storage + Graph Entropy Caching",
      description: "Global scaling without central bottlenecks",
      complete: false,
    },
    {
      phase: "Phase 5",
      title: "Genetic Deployment & Optimization",
      description: "Continuous AI-driven performance evolution",
      complete: false,
    },
  ];

  return (
    <section id="roadmap" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cosmos opacity-10"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Launch Roadmap
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-[700px]">
            Our step-by-step journey to build the infinite web architecture
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border"></div>
          
          {roadmapItems.map((item, i) => (
            <div key={i} className="relative">
              <div className={`flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 mb-12`}>
                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-accent z-10">
                  {item.complete ? (
                    <CheckCircle className="h-6 w-6 text-nature-leaf" />
                  ) : (
                    <Clock className="h-6 w-6 text-accent" />
                  )}
                </div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-background/70 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent/50 transition-colors">
                    <div className="text-accent font-medium mb-2">{item.phase}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
