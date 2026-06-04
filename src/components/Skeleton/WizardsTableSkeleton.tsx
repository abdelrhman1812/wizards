export const WizardsTableSkeleton = () => {
  return (
    <div
      className="mt-8 rounded-xl bg-background/80 shadow-2xl border border-[#4944544D] overflow-hidden flex flex-col"
      style={{ boxShadow: "0 25px 50px -12px #00000040" }}
    >
      <div className="animate-pulse ">
        {/* Header */}
        <div className="grid grid-cols-[2fr_1fr_1fr_3fr_1fr] gap-4 px-6 py-4 border-b border-white/10">
          {[
            "ID",
            "FIRST NAME",
            "LAST NAME",
            "ASSOCIATED ELIXIRS",
            "ACTIONS",
          ].map((col) => (
            <div key={col} className="h-3 w-20 bg-white/10 rounded" />
          ))}
        </div>

        {/* Rows */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-[2fr_1fr_1fr_3fr_1fr] gap-4 px-6 py-6 border-b border-white/5 items-center"
          >
            {/* ID */}
            <div className="h-3 w-56 bg-white/10 rounded" />
            {/* First Name */}
            <div className="h-3 w-16 bg-white/10 rounded" />
            {/* Last Name */}
            <div className="h-3 w-20 bg-white/10 rounded" />
            {/* Elixirs */}
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: [1, 3, 1, 2][i] }).map((_, j) => (
                <div key={j} className="h-6 w-28 bg-white/10 rounded-full" />
              ))}
            </div>
            {/* Action */}
            <div className="flex justify-end">
              <div className="h-5 w-5 bg-white/10 rounded-full" />
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="flex justify-between items-center px-6 py-4">
          <div className="h-3 w-36 bg-white/10 rounded" />
          <div className="flex gap-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-8 w-8 bg-white/10 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
