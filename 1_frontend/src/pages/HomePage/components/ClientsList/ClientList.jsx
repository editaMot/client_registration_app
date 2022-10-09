import React from 'react';
import useFetch from '../../../../hooks/useFetch';
import Table from '../../../../components/Table/Table';
import { StyledListWrapper } from './ClientList.style';

const ClientList = () => {
  const { clients, isLoading, error } = useFetch(
    'http://localhost:5000/api/clients'
  );

  return (
    <StyledListWrapper>
      <h3>List of registered clients</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Table data={clients} />
      )}
    </StyledListWrapper>
  );
};

export default ClientList;
