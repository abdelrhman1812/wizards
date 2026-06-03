import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Alchemists", value: 45, color: "#D0BCFF" },
  { name: "Transmuters", value: 30, color: "#FFB95F" },
  { name: "Conjurers", value: 25, color: "#BCC7DE" },
];

const WizardsBySpecialtyChart = () => {
  return (
    <div
      className="p-6 rounded-xl bg-background/80 shadow-2xl h-full flex flex-col border border-[#4944544D]"
      style={{
        boxShadow: "0 25px 50px -12px #00000040",
      }}
    >
      <h3 className="text-2xl font-semibold  mb-6">Wizards by Specialty</h3>
      <div className="relative flex-1 flex justify-center items-center min-h-[220px]">
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
          <span className="text-3xl font-semibold ">1.2k</span>
          <span className="  mt-1">Total</span>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={[{ value: 100 }]}
              innerRadius={90}
              outerRadius={120}
              dataKey="value"
              stroke="none"
              fill="#1e293b"
              isAnimationActive={false}
            />
            <Pie
              data={data}
              innerRadius={90}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
              cornerRadius={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 space-y-4 px-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm"
          >
            <div className="flex items-center gap-3">
              <span
                className="w-3.5 h-3.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-semibold">{item.name}</span>
            </div>
            <span className="text-sm font-semibold">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WizardsBySpecialtyChart;
