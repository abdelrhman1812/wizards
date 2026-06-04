import { Filter, Search } from "lucide-react";
import { memo } from "react";

const HeaderMasterWizardSection = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}) => {
  return (
    <div className="p-2 sm:p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-b border-white/5">
      <h3 className="text-xl font-medium">Master Wizard Registry</h3>

      <div className="flex items-center h-10 border border-white/20 rounded-md bg-white/5 overflow-hidden">
        {/* Search */}
        <div className="relative flex items-center h-full">
          <Search className="w-4 h-4 absolute left-3 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search wizards..."
            value={searchTerm}
            onChange={(e) => {
              const val = e.target.value;
              setSearchTerm(val.charAt(0).toUpperCase() + val.slice(1));
            }}
            className="h-full pl-9 pr-4 bg-transparent text-sm placeholder:text-gray-500 focus:outline-none w-48 md:w-56"
          />
        </div>

        <div className="w-px h-5 bg-white/20 shrink-0" />

        {/* Filter */}
        <button className="flex items-center gap-2 h-full px-4 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
};

export default memo(HeaderMasterWizardSection);
