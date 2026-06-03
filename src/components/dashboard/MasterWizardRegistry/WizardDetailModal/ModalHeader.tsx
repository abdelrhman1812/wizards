const ModalHeader = () => {
  return (
    <div className="px-6 py-1 md:py-5 flex justify-between items-start border-b border-[#4944544D]">
      <div>
        <p className=" uppercase  text-secondary">Member Profile</p>
        <h2 className="text-xl sm:text-3xl font-semibold  mt-1">Mrs Skower</h2>
      </div>
      <div className="text-right">
        <p className=" uppercase  text-muted-foreground">Registry ID</p>
        <p className="text-xl sm:text-2xl font-semibold text-primary mt-0.5">
          WR-1897-MS
        </p>
      </div>
    </div>
  );
};

export default ModalHeader;
