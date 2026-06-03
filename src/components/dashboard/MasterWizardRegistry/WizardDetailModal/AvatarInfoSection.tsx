import imageDetails from "../../../../assets/details.jpg";

const AvatarInfoSection = () => {
  return (
    <>
      {/* Avatar  */}
      <div className="flex flex-col items-start shrink-0 mr-4">
        <div className="w-20 h-20 md:w-48 md:h-48 rounded-full border-2 overflow-hidden border-[#D0BCFF4D] flex items-center justify-content-center shadow-lg">
          <img src={imageDetails} alt="" />
        </div>

        {/* Tags */}
        <div className="flex gap-1.5 mt-2.5 flex-wrap">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#A078FF1A] text-[#D0BCFF] border border-[#A078FF33]">
            Class A Citizen
          </span>
          <span className="bg-[#EE98001A] border border-[#EE980033] text-primary px-3 py-1 rounded-full text-xs font-medium">
            High Council
          </span>
        </div>
      </div>
    </>
  );
};

export default AvatarInfoSection;
