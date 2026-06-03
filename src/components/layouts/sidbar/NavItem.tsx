import React from "react";

interface NavItemProps {
  icon: React.ElementType;
  label?: string;
  active?: boolean;
  muted?: boolean;
  isCollapsed?: boolean;
}

const NavItem = ({ icon: Icon, label, active, isCollapsed }: NavItemProps) => (
  <a
    href="#"
    className={`flex items-center text-sm gap-3 py-3 rounded-lg font-semibold transition-colors
      ${isCollapsed ? "justify-center px-0" : "px-6"}
      ${
        active
          ? " bg-primary/20 text-primary border-r-2 border-primary"
          : " hover:bg-slate-800/50"
      }
      `}
  >
    <Icon className="w-5 h-5 shrink-0" />
    {!isCollapsed && <span>{label}</span>}
  </a>
);

export default NavItem;
