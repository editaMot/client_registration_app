import React from 'react';
import { StyledPagWrapper } from './Pagination.style';

const usePagination = ({ clientsPerPage, totalClients, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalClients / clientsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPagWrapper>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </StyledPagWrapper>
  );
};

export default usePagination;
