import { Plus } from "lucide-react";
import { bottom_nav_links, nav_links } from "../../../constants/navigation";
import Logo from "../../ui/Logo";
import NavItem from "./NavItem";

interface SidebarProps {
  isCollapsed?: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  return (
    <div
      className={`flex flex-col bg-card min-h-screen transition-all duration-300 ease-in-out ${isCollapsed ? "w-16" : "w-64"} shrink-0`}
    >
      {/* Logo  */}
      <Logo isCollapsed={isCollapsed} />

      {/* Navigation */}
      <nav
        className={`flex-1 pt-12 space-y-1 ${isCollapsed ? "px-2" : "px-4"}`}
      >
        {nav_links.map((item) => (
          <NavItem key={item.label} isCollapsed={isCollapsed} {...item} />
        ))}
      </nav>

      {/* Bottom Area */}
      <div className={`pb-6 space-y-4 ${isCollapsed ? "px-2" : "px-4"}`}>
        {!isCollapsed ? (
          <button
            className="w-full flex items-center justify-center gap-2 font-medium py-2.5 rounded-xl transition-colors text-[#3C0091]"
            style={{
              background: "#d8b4fe",
              boxShadow: "0 4px 6px -4px #D0BCFF33, 0 10px 15px -3px #D0BCFF33",
            }}
          >
            <Plus className="w-4 h-4" />
            New Elixir
          </button>
        ) : (
          <button
            className="w-full flex items-center justify-center py-2.5 rounded-xl transition-colors text-[#3C0091]"
            style={{
              background: "#d8b4fe",
              boxShadow: "0 4px 6px -4px #D0BCFF33, 0 10px 15px -3px #D0BCFF33",
            }}
          >
            <Plus className="w-5 h-5" />
          </button>
        )}

        <div className="space-y-1 pt-4">
          {bottom_nav_links.map((item) => (
            <NavItem key={item.label} isCollapsed={isCollapsed} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
