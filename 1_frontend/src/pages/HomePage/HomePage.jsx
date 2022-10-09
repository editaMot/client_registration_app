import React from 'react';
import ClientReg from './components/ClientReg/ClientReg';
import ClientList from './components/ClientsList';
import { StyledHomePageWrapper } from './HomePage.style';

const HomePage = () => {
  return (
    <StyledHomePageWrapper>
      <ClientReg />
      <ClientList />
    </StyledHomePageWrapper>
  );
};

export default HomePage;
