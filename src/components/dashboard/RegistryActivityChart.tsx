import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { label: "Moon Start", value: 40 },
  { label: "", value: 60 },
  { label: "", value: 35 },
  { label: "", value: 75 },
  { label: "", value: 55 },
  { label: "Full Moon", value: 90 },
  { label: "", value: 60 },
  { label: "", value: 85 },
  { label: "", value: 45 },
  { label: "Moon End", value: 70 },
];

const RegistryActivityChart = () => {
  return (
    <div
      className="p-6 rounded-xl bg-background/80 shadow-2xl h-full flex flex-col border border-[#4944544D]"
      style={{
        boxShadow: "0 25px 50px -12px #00000040",
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold ">Registry Activity</h3>
        <span className="text-sm font-semibold  bg-[#273647] py-1 px-3 rounded-md">
          Last 30 Days
        </span>
      </div>
      <div className="flex-1 w-full min-h-[300px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="15%">
            <CartesianGrid
              vertical={false}
              stroke="#1e293b"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#CBC3D7", fontSize: 12 }}
              interval="preserveStartEnd"
              dy={15}
            />
            <YAxis hide domain={[0, "dataMax + 10"]} />
            <Tooltip
              cursor={{ fill: "#1e293b", opacity: 0.4 }}
              contentStyle={{
                backgroundColor: "#0f172a",
                borderColor: "#1e293b",
                borderRadius: "8px",
                color: "#d4e4fa",
              }}
            />
            <Bar dataKey="value" fill="#273647" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RegistryActivityChart;
