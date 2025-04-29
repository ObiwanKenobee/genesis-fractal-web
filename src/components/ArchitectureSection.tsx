
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ArchitectureSectionProps {
  id: string;
  title: string;
  subtitle: string;
  quote?: string;
  items: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  gradientClass: string;
}

const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({
  id,
  title,
  subtitle,
  quote,
  items,
  gradientClass,
}) => {
  return (
    <section id={id} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className={`absolute inset-0 ${gradientClass} opacity-10`}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            {title}
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-[700px]">
            {subtitle}
          </p>
          {quote && (
            <div className="max-w-md mx-auto my-4 italic text-muted-foreground border-l-4 pl-4 border-accent">
              {quote}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Card key={i} className="backdrop-blur-sm bg-background/70 border border-accent/30 hover:border-accent/60 transition-colors">
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-full flex items-center justify-center bg-background/50 border border-accent/20">
                  {item.icon}
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
