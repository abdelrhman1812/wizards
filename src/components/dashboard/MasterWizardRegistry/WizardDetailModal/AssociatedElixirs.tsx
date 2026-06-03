import { ChevronRight, FlaskConical, Syringe } from "lucide-react";

const elixirs = [
  {
    name: "Mrs Skower's All-Purpose Magical Mess Remover",
    inventory: 142,
  },
  { name: "Scouring Solution Grade IV", inventory: 12 },
];
const InfoItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <div>
      <p className="text-muted-foreground  uppercase  mb-1">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
};

const AssociatedElixirs = () => {
  return (
    <div className="flex-1 space-y-3 md:space-y-20">
      {/* Info grid card */}
      <div className="  rounded-xl p-4 grid grid-cols-2 gap-x-5 gap-y-4  bg-[#010F1F66]">
        <InfoItem label="First Name" value="Skower" />
        <InfoItem label="Last Name" value="Unknown" />
        <div>
          <p className="text-muted-foreground uppercase mb-1">
            Registry Status
          </p>
          <span className="inline-flex items-center gap-1.5 text-primary font-medium text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Active
          </span>
        </div>
        <InfoItem
          label="Primary Specialty"
          value="Domestic Alchemy & Cleaning Charms"
        />
      </div>

      {/* Associated Elixirs */}
      <div className="pb-4">
        <div className="flex items-center gap-2 mb-3">
          <FlaskConical className="text-secondary" />
          <p className="text-sm font-semibold text-white">Associated Elixirs</p>
        </div>

        <div className="space-y-2">
          {elixirs.map((elixir) => (
            <div
              key={elixir.name}
              className="flex items-center justify-between px-4 py-3 rounded-xl  bg-[#1C2B3C66] hover:bg-white/5 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#D0BCFF1A] flex  items-center justify-center shrink-0">
                  <Syringe size={18} className="text-secondary" />
                </div>
                <div>
                  <p>{elixir.name}</p>
                  <p>Inventory: {elixir.inventory} Units</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssociatedElixirs;
