import { memo } from "react";
import AssociatedElixirs from "./AssociatedElixirs";
import AvatarInfoSection from "./AvatarInfoSection";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

interface WizardDetailModalProps {
  onClose: () => void;
}

const WizardDetailModal = memo(({ onClose }: WizardDetailModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50  flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        className="relative bg-[#0D1C2D] h-[650px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 sm:overflow-hidden sm:h-auto w-full max-w-[1000px] rounded-2xl border border-[#D0BCFF4D] overflow-visible"
        style={{
          boxShadow: "0 32px 64px -12px rgba(0,0,0,0.7)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader />
        <div className="px-6 pt-5 pb-4 flex flex-col md:flex-row gap-4 items-start ">
          <AvatarInfoSection />

          <AssociatedElixirs />
        </div>
        <ModalFooter onClose={onClose} />
      </div>
    </div>
  );
});

export default WizardDetailModal;
