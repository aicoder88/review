export function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white border border-border rounded-xl p-6">
      <div className="bg-gray-200 h-48 rounded-xl mb-4"></div>
      <div className="bg-gray-200 h-6 rounded w-3/4 mb-2"></div>
      <div className="bg-gray-200 h-4 rounded w-1/2 mb-4"></div>
      <div className="bg-gray-200 h-10 rounded w-full"></div>
    </div>
  );
}

export function SkeletonLine({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 h-4 rounded ${className || 'w-full'}`}></div>
  );
}

export function SkeletonCircle({ size = 12 }: { size?: number }) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded-full w-${size} h-${size}`}
      style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
    ></div>
  );
}
