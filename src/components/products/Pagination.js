import React from "react";
import { productList } from "../../data/ProductData/pianoProdData";

const { useState, createContext } = React;

const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
  const [pagination, setPagination] = useState({
    limit: 16,
    total: productList.length,
    start: 0,
    page: 1,
    perPage: 16,
    showPrevButton: false,
    showFirstPageButton: false,
    showNextButton: false,
    showLastPageButton: false,
  });
  return (
    <PaginationContext.Provider value={[pagination, setPagination]}>
      {children}
    </PaginationContext.Provider>
  );
};

export { PaginationProvider, PaginationContext };
