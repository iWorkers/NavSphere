import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
  children: React.ReactNode;
}

export function AnimatedContainer({
  animation = "fade",
  delay = 0,
  duration = 300,
  once = true,
  className,
  children,
  ...props
}: AnimatedContainerProps) {
  const [isVisible, setIsVisible] = useState(!once);
  
  useEffect(() => {
    if (once) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [delay, once]);
  
  const animationClasses = {
    "fade": "opacity-0 transition-opacity",
    "slide-up": "opacity-0 translate-y-4 transition-all",
    "slide-down": "opacity-0 -translate-y-4 transition-all",
    "slide-left": "opacity-0 translate-x-4 transition-all",
    "slide-right": "opacity-0 -translate-x-4 transition-all",
    "scale": "opacity-0 scale-95 transition-all",
    "none": "",
  };
  
  return (
    <div
      className={cn(
        animation !== "none" && animationClasses[animation],
        isVisible && "opacity-100 translate-x-0 translate-y-0 scale-100",
        className
      )}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
      {...props}
    >
      {children}
    </div>
  );
}
