import { AlertCircle, FlaskConical, TrendingUp } from "lucide-react";
import type { KPIT } from "../../types/kpi.types";

const kpiData: KPIT[] = [
  {
    title: "TOTAL REGISTERED WIZARDS",
    value: "1,248",
    description: "+4% from last moon",
    icon: TrendingUp,
    valueColor: "text-secondary",
    descriptionColor: "text-primary",
  },
  {
    title: "ACTIVE ELIXIRS",
    value: "856",
    description: "24 new formulas registered",
    icon: FlaskConical,
    valueColor: "text-primary",
    descriptionColor: "text-primary",
  },
  {
    title: "PENDING VERIFICATIONS",
    value: "12",
    description: "Requires High-Council approval",
    icon: AlertCircle,
    valueColor: "text-[#FFB4AB]",
    descriptionColor: "text-[#FFB4AB]",
  },
];

const KPICards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {kpiData.map((kpi, index) => {
        const Icon = kpi.icon;
        return (
          <div
            key={index}
            className="p-6 border border-[#4944544D] rounded-xl bg-background/80 flex flex-col justify-between"
            style={{
              boxShadow: "0 25px 50px -12px #00000040",
            }}
          >
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground tracking-[1.6px] mb-4">
                {kpi.title}
              </h3>
              <p className={`text-[32px] font-semibold  ${kpi.valueColor}`}>
                {kpi.value}
              </p>
            </div>
            <div
              className={`flex items-center gap-2 mt-8 text-xs font-medium  ${kpi.descriptionColor}`}
            >
              <Icon className="w-4 h-4" strokeWidth={2.5} />
              <span>{kpi.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPICards;
