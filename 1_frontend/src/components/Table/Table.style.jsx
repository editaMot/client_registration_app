import styled from 'styled-components';

export const StyledTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 25px 0 10px;
  font-size: 0.9em;
  width: 850px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  thead tr {
    background-color: #737ebf;
    font-size: 1em;
    color: #ffffff;
    text-align: center;
  }

  th,
  td {
    padding: 12px 15px;
    text-align: center;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
`;
