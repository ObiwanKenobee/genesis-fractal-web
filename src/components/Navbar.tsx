
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-golden animate-golden-spin">
            <div className="absolute inset-0.5 rounded-full bg-background flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-gradient-golden"></div>
            </div>
          </div>
          <span className="text-lg font-bold">Infinite Web</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#foundations" className="text-sm font-medium hover:text-primary transition-colors">Foundations</a>
          <a href="#frontend" className="text-sm font-medium hover:text-primary transition-colors">Frontend</a>
          <a href="#pipeline" className="text-sm font-medium hover:text-primary transition-colors">Pipeline</a>
          <a href="#data" className="text-sm font-medium hover:text-primary transition-colors">Data Flow</a>
          <a href="#components" className="text-sm font-medium hover:text-primary transition-colors">Components</a>
          <a href="#roadmap" className="text-sm font-medium hover:text-primary transition-colors">Roadmap</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">Get Started</Button>
          <Button size="sm" className="bg-gradient-golden hover:bg-nature-gold">GitHub</Button>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <a href="#foundations" className="text-sm font-medium hover:text-primary py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Foundations</a>
            <a href="#frontend" className="text-sm font-medium hover:text-primary py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Frontend</a>
            <a href="#pipeline" className="text-sm font-medium hover:text-primary py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Pipeline</a>
            <a href="#data" className="text-sm font-medium hover:text-primary py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Data Flow</a>
            <a href="#components" className="text-sm font-medium hover:text-primary py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Components</a>
            <a href="#roadmap" className="text-sm font-medium hover:text-primary py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
            
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" size="sm">Get Started</Button>
              <Button size="sm" className="bg-gradient-golden">GitHub</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
