import React, { useState, useEffect, useCallback } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { PaginationContainer, PaginationButton, PaginationNumbers } from './Pagination.styled';

const Pagination = (
  { currentPage, totalPages, onPageChange }
  ) => {
  const [displayedPages, setDisplayedPages] = useState([]);

  const updatePages = useCallback(
    page => {
      const totalPagesToShow = 5;
      const halfTotalPagesToShow = Math.floor(totalPagesToShow / 2);

      let startPage = Math.max(page - halfTotalPagesToShow, 1);
      let endPage = Math.min(startPage + totalPagesToShow - 1, totalPages);

      if (endPage - startPage < totalPagesToShow - 1) {
        startPage = Math.max(endPage - totalPagesToShow + 1, 1);
      }

      const newPages = Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
      );
      setDisplayedPages(newPages);
    },
    [totalPages]
  );

  useEffect(() => {
    updatePages(currentPage);
  }, [currentPage, updatePages]);

  const handlePageClick = page => {
    onPageChange(page);
    updatePages(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      updatePages(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      updatePages(currentPage + 1);
    }
  };
  return (
      <PaginationContainer>
        <PaginationButton onClick={handlePrevClick}>
          <BsArrowLeft />
        </PaginationButton>
        <PaginationNumbers>
          {displayedPages.map(page => (
            <PaginationButton
              key={page}
              onClick={() => handlePageClick(page)}
              $active={currentPage === page}
            >
              {page}
            </PaginationButton>
          ))}
        </PaginationNumbers>
        <PaginationButton onClick={handleNextClick}>
          <BsArrowRight />
        </PaginationButton>
      </PaginationContainer>
  );
};

export default Pagination;