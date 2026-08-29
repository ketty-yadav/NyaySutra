"use client";



export function AISkeleton({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`animate-pulse space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i} 
          className={`h-4 bg-brand-navy/5 rounded-md ${
            i === 0 ? "w-3/4" : i === lines - 1 ? "w-1/2" : "w-full"
          }`}
        ></div>
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-xl border border-brand-navy/5 shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-brand-navy/5 rounded-lg animate-pulse"></div>
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-brand-navy/5 rounded-md w-1/3 animate-pulse"></div>
          <div className="h-3 bg-brand-navy/5 rounded-md w-1/4 animate-pulse"></div>
        </div>
      </div>
      <AISkeleton lines={2} />
    </div>
  );
}
