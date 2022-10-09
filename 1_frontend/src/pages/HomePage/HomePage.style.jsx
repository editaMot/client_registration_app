import styled from "styled-components";

export const StyledHomePageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin: 70px auto;
  max-width: 1280px;

  @media screen and (min-width: 1200px) {
    align-items: baseline;
    flex-direction: row;
  }
`;
