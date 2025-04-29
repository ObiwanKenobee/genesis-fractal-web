
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-golden opacity-10 animate-flow"></div>
      
      {/* Background fractal pattern */}
      <div className="absolute inset-0 fractal-bg" 
        style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVaIiBzdHJva2U9IiNGRkQ3MDAiIHN0cm9rZS1vcGFjaXR5PSIwLjIiIHN0cm9rZS13aWR0aD0iMSIgLz48cGF0aCBkPSJNMzAgNUw1IDMwTDMwIDU1TDU1IDMwTDMwIDVaIiBzdHJva2U9IiNGRkQ3MDAiIHN0cm9rZS1vcGFjaXR5PSIwLjIiIHN0cm9rZS13aWR0aD0iMSIgLz48L3N2Zz4=')"}}>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-golden animate-breathe">
              React Infinite Architecture
            </h1>
            <p className="md:text-xl text-muted-foreground max-w-[700px] mx-auto">
              Beautiful, efficient, and infinitely scalable web development inspired by nature's patterns
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 min-w-[200px]">
            <Button size="lg" className="bg-gradient-golden hover:bg-nature-gold hover:scale-105 transition-transform">
              Explore Architecture
            </Button>
            <Button size="lg" variant="outline" className="border-accent">
              View Demo
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#foundations" className="text-foreground/70 hover:text-foreground">
          <ArrowDownIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
