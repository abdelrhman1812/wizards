export const RegistryActivityChartSkeleton = () => {
  const bars = [40, 60, 35, 75, 55, 90, 60, 85, 45, 70];

  return (
    <div
      className="p-6 rounded-xl bg-background/80 shadow-2xl h-full flex flex-col border border-[#4944544D]"
      style={{ boxShadow: "0 25px 50px -12px #00000040" }}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="h-7 w-40 bg-white/10 rounded animate-pulse" />
        <div className="h-7 w-24 bg-[#273647] rounded-md animate-pulse" />
      </div>

      <div className="flex-1 w-full min-h-[300px] mt-4 flex items-end gap-3 px-2">
        {bars.map((height, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <div
              className="w-full bg-white/10 rounded-sm animate-pulse"
              style={{ height: `${height * 2.5}px` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
