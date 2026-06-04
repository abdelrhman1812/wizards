import type { WizardT } from "../../../../types/master_wizard_registry.types";

const WizardElixirs = ({
  wizard,
  index,
}: {
  wizard: WizardT;
  index: number;
}) => {
  return (
    <div className="flex flex-wrap gap-2 w-50 md:w-full">
      {wizard?.elixirs?.map((elixir) => {
        const elixirColor =
          index % 2 === 0
            ? "bg-[#EE98001A] border border-[#EE980033] text-primary"
            : "bg-[#A078FF1A] text-[#D0BCFF] border border-[#A078FF33]";
        return (
          <span
            key={elixir.id}
            className={`px-3 py-1 rounded-full text-xs font-medium ${elixirColor}`}
          >
            {elixir.name}
          </span>
        );
      })}
    </div>
  );
};

export default WizardElixirs;
