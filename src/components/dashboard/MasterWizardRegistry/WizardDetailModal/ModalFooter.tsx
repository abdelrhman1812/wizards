import { Pencil } from "lucide-react";

interface ModalFooterProps {
  onClose: () => void;
}

const ModalFooter = ({ onClose }: ModalFooterProps) => {
  return (
    <div className="px-6 pb-2 md:pb-4  flex justify-end items-center  gap-3">
      <button
        onClick={onClose}
        className="px-5 py-2 text-sm text-muted-foreground hover:text-white cursor-pointer transition-colors"
      >
        Close
      </button>
      <button
        className="w-[175px] flex items-center gap-2 font-bold  cursor-pointer justify-center py-2.5 rounded-xl transition-colors text-[#3C0091]"
        style={{
          background: "#d8b4fe",
          boxShadow: "0 4px 6px -4px #D0BCFF33, 0 10px 15px -3px #D0BCFF33",
        }}
      >
        <Pencil className="w-5 h-5" />
        Edit Record
      </button>
    </div>
  );
};

export default ModalFooter;
