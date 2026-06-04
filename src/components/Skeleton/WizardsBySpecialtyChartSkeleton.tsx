export const WizardsBySpecialtyChartSkeleton = () => {
  return (
    <div
      className="p-6 rounded-xl bg-background/80 shadow-2xl h-full flex flex-col border border-[#4944544D]"
      style={{ boxShadow: "0 25px 50px -12px #00000040" }}
    >
      {/* Header */}
      <div className="h-7 w-48 bg-white/10 rounded animate-pulse mb-6" />

      {/* Pie Circle */}
      <div className="relative flex-1 flex justify-center items-center min-h-[220px]">
        <div className="w-[240px] h-[240px] rounded-full border-30 border-white/10 animate-pulse flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-12 bg-white/10 rounded animate-pulse" />
            <div className="h-4 w-10 bg-white/10 rounded animate-pulse" />
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 space-y-4 px-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-white/10 animate-pulse" />
              <div className="h-4 w-24 bg-white/10 rounded animate-pulse" />
            </div>
            <div className="h-4 w-8 bg-white/10 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};
