import { Bell, Search, Settings } from "lucide-react";

const TopBar = () => {
  return (
    <nav
      className="flex items-center justify-between px-4 md:px-10 border-b h-16"
      style={{
        backgroundColor: "rgba(5, 20, 36, 0.8)",
        borderColor: "rgba(73, 68, 84, 0.3)",
        boxShadow: "0 0 20px 0 rgba(208, 188, 255, 0.15)",
        backdropFilter: "blur(24px)",
      }}
    >
      {/* left side */}
      <div className="flex items-center gap-x-4 md:gap-x-20 h-8">
        <h1 className="text-lg md:text-2xl font-bold text-primary">
          Wizarding Registry
        </h1>

        {/* search - desktop only */}
        <div className="hidden md:block w-64 h-9 relative">
          <Search
            className="absolute text-foreground left-2 top-1/2 -translate-y-1/2"
            size={18}
          />
          <input
            type="text"
            className="bg-card w-full h-full rounded-full pl-10 placeholder:text-[#6B7280]"
            placeholder="Scrying records..."
          />
        </div>
      </div>

      {/* right side */}
      <div className="flex items-center gap-x-4 md:gap-x-10 h-8">
        <Search className="text-foreground md:hidden" size={20} />
        <Bell className="text-foreground" size={20} />
        <Settings className="text-foreground" size={20} />
        <div className="w-8 h-8  rounded-full bg-primary" />
      </div>
    </nav>
  );
};

export default TopBar;
