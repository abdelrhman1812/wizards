import { useCallback, useMemo, useState } from "react";
import { useWizards } from "../../../hooks/actions/useWizards";
import { useDebounce } from "../../../hooks/useDebounce";

const useMasterWizardRegistry = () => {
  const [searchTerm, setSearchTermState] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 4;

  const debouncedSearchValue = useDebounce(searchTerm, 1000);

  const { data, isPending, error } = useWizards(
    debouncedSearchValue ? { FirstName: debouncedSearchValue } : undefined,
  );

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return data?.slice(startIndex, startIndex + pageSize);
  }, [data, currentPage, pageSize]);

  const setSearchTerm = useCallback((term: string) => {
    setSearchTermState(term);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    currentPage,
    handlePageChange,
    paginatedData,
    totalRecords: data?.length ?? 0,
    pageSize,
    isPending,
    error,
  };
};

export default useMasterWizardRegistry;
