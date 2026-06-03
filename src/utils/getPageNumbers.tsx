const getPageNumbers = (currentPage: number, totalPages: number) => {
  const pages: number[] = [];

  let start = Math.max(1, currentPage - 1);
  const end = Math.min(totalPages, start + 2);

  if (end - start < 2) {
    start = Math.max(1, end - 2);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
};

export default getPageNumbers;
