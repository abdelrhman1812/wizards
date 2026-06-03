import Pagination from "../../ui/Pagination";
import HeaderMasterWizardSection from "./HeaderMasterWizardSection";
import useMasterWizardRegistry from "./useMasterWizardRegistry";
import WizardDetailModal from "./WizardDetailModal/WizardDetailModal";
import WizardsTable from "./WizardsTable/WizardsTable";

export default function MasterWizardRegistry() {
  const {
    searchTerm,
    setSearchTerm,
    currentPage,
    handlePageChange,
    paginatedData,
    totalRecords,
    pageSize,
    isPending,
    error,
    isDetailOpen,
    openDetail,
    closeDetail,
  } = useMasterWizardRegistry();

  return (
    <>
      <div
        className="mt-8 rounded-xl bg-background/80 shadow-2xl border border-[#4944544D] overflow-hidden flex flex-col"
        style={{ boxShadow: "0 25px 50px -12px #00000040" }}
      >
        <HeaderMasterWizardSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {isPending ? (
          <div className="p-8 text-center text-muted-foreground">
            Loading data...
          </div>
        ) : error ? (
          <div className="p-8 text-center text-[#ffaaa5]">
            error loading the data...
          </div>
        ) : (
          <>
            <WizardsTable data={paginatedData} onView={openDetail} />
            {totalRecords > 0 && (
              <Pagination
                currentPage={currentPage}
                totalRecords={totalRecords}
                pageSize={pageSize}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>

      {isDetailOpen && <WizardDetailModal onClose={closeDetail} />}
    </>
  );
}
