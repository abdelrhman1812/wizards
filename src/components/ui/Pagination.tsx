import type { LucideIcon } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import getPageNumbers from "../../utils/getPageNumbers";

interface PaginationProps {
  currentPage: number;
  totalRecords: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

interface NavBtnProps {
  onClick: () => void;
  disabled: boolean;
  icon: LucideIcon;
}

const Pagination = ({
  currentPage,
  totalRecords,
  pageSize,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalRecords / pageSize);
  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, totalRecords);

  return (
    <div className="flex justify-between items-center px-6 py-4 border-t border-[#4944544D]">
      <p className="text-sm text-slate-300">
        Showing {startIndex}-{endIndex} of {totalRecords} Records
      </p>

      <div className="flex items-center gap-1">
        <NavBtn
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          icon={ChevronLeft}
        />

        {getPageNumbers(currentPage, totalPages).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded-md text-sm ${
              currentPage === page
                ? "bg-secondary text-[#381E72]"
                : "text-muted-foreground"
            }`}
          >
            {page}
          </button>
        ))}

        <NavBtn
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          icon={ChevronRight}
        />
      </div>
    </div>
  );
};

export default Pagination;

const NavBtn = ({ onClick, disabled, icon: Icon }: NavBtnProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="p-1 text-slate-400 hover:text-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <Icon className="w-5 h-5" />
  </button>
);
