import React from "react";
import { cn } from "@/lib/utils";

export function GlassCard({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("glass rounded-2xl p-8 md:p-12", className)} {...props}>
      {children}
    </div>
  );
} 