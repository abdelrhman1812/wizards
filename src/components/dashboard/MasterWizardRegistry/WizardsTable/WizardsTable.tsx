import { Eye } from "lucide-react";
import { memo } from "react";
import type { WizardT } from "../../../../types/master_wizard_registry.types";
import WizardElixirs from "./wizardElixirs";
import WizardTableBodyTD from "./WizardTableBodyTD";
import WizardTableHead from "./WizardTableHead";

const WizardsTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <WizardTableHead />
        <tbody className="divide-y divide-white/5 text-sm">
          {data.length > 0 ? (
            data.map((wizard: WizardT, index: number) => (
              <tr
                key={wizard.id}
                className="hover:bg-white/2  transition-colors group"
              >
                <WizardTableBodyTD color="text-secondary" content={wizard.id} />
                <WizardTableBodyTD content={wizard.firstName || "Unknown"} />
                <WizardTableBodyTD content={wizard.lastName || "Unknown"} />
                <td className="px-6 py-5">
                  {wizard.elixirs?.length > 0 ? (
                    <WizardElixirs index={index} wizard={wizard} />
                  ) : (
                    <span className="text-muted-foreground">Empty</span>
                  )}
                </td>
                <td className="px-6 py-5 text-right whitespace-nowrap">
                  <button className="text-slate-400 hover:text-slate-200 transition-colors p-2 rounded-full hover:bg-white/5">
                    <Eye className="w-5 h-5 mx-auto" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                No wizards found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default memo(WizardsTable);
