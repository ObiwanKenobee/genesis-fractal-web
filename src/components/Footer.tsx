
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { GithubIcon, TwitterIcon, LinkedinIcon, HeartIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4 md:w-1/3">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-golden">
                <div className="absolute inset-0.5 rounded-full bg-muted flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-gradient-golden"></div>
                </div>
              </div>
              <span className="text-lg font-bold">Infinite Web</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Building the future of web development with principles inspired by nature and mathematical beauty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="font-medium">Architecture</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#foundations" className="text-muted-foreground hover:text-foreground transition-colors">Foundations</a>
                </li>
                <li>
                  <a href="#frontend" className="text-muted-foreground hover:text-foreground transition-colors">Frontend Experience</a>
                </li>
                <li>
                  <a href="#pipeline" className="text-muted-foreground hover:text-foreground transition-colors">Pipeline & Build System</a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#data" className="text-muted-foreground hover:text-foreground transition-colors">Data Flow</a>
                </li>
                <li>
                  <a href="#components" className="text-muted-foreground hover:text-foreground transition-colors">Component Architecture</a>
                </li>
                <li>
                  <a href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors">Launch Roadmap</a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About us</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            &copy; {new Date().getFullYear()} Infinite Web. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Made with <HeartIcon className="h-4 w-4 text-nature-sunset" /> by Lovable AI
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
