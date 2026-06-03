import { Sparkles } from "lucide-react";

const Logo = ({ isCollapsed }: { isCollapsed?: boolean }) => {
  return (
    <div
      className={`flex flex-col items-center pt-8 pb-6 ${isCollapsed ? "px-0" : "px-6"}`}
    >
      <div
        className={`${isCollapsed ? "w-12 h-12" : "w-16 h-16"} rounded-xl p-px bg-linear-to-br from-[#D0BCFF] to-[#FFB95F] mb-3`}
      >
        <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
          <Sparkles
            className={`${isCollapsed ? "w-6 h-6" : "w-8 h-8"} text-primary`}
            fill="#EAB308"
          />
        </div>
      </div>
      {!isCollapsed && (
        <div className="text-center">
          <h2 className="text-primary font-extrabold text-lg tracking-wide">
            Registry
          </h2>
          <p className="text-muted-foreground text-xs tracking-[0.6px] font-medium mt-0.5">
            Ministry of Alchemical Records{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
