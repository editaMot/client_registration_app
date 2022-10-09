import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import EditableRow from './EditableRow/EditableRow';
import ReadOnlyRow from './ReadOnlyRow.js/ReadOnlyRow';
import Pagination from '../Pagination';
import { StyledTable, StyledTableWrapper } from './Table.style';

const Table = ({ data }) => {
  const tableHeadData = Object.keys(data[0]);

  const [clients, setClients] = useState(data);
  const [editClientId, setEditClientId] = useState(null);
  const [editClientInfo, setEditClientInfo] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage] = useState(10);

  const handleEditClick = (e, clients) => {
    e.preventDefault();
    setEditClientId(clients._id);

    const formValues = {
      name: clients.name,
      email: clients.email,
      date: clients.date,
      time: clients.time,
    };

    setEditClientInfo(formValues);
  };

  const handleEditFormChange = (e) => {
    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newClientData = { ...editClientInfo };

    newClientData[fieldName] = fieldValue;

    setEditClientInfo(newClientData);
  };

  const handleEditFormSubmit = (e) => {
    const editedClient = {
      id: editClientId,
      name: editClientInfo.name,
      email: editClientInfo.email,
      date: editClientInfo.date,
      time: editClientInfo.time,
    };

    const newClients = [...clients];

    const index = clients.findIndex((client) => client._id === editClientId);

    newClients[index] = editedClient;

    setClients(newClients);
    setEditClientId(null);

    axios.put(
      `http://localhost:5000/api/clients/${editClientId}`,
      editedClient
    );
  };

  const handleCancelClick = () => {
    setEditClientId(null);
  };

  const handleDeleteClick = (clientId) => {
    axios.delete(`http://localhost:5000/api/clients/${clientId}`);
  };

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <StyledTableWrapper>
      <form onSubmit={handleEditFormSubmit}>
        <StyledTable>
          <thead>
            <tr>
              {tableHeadData.slice(1, tableHeadData.length - 1).map((item) => (
                <th key={item}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentClients.map((item, index) => (
              <>
                {editClientId === item._id ? (
                  <EditableRow
                    editClientInfo={editClientInfo}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    item={item}
                    key={index}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </>
            ))}
          </tbody>
        </StyledTable>
      </form>
      <Pagination
        clientsPerPage={clientsPerPage}
        totalClients={clients.length}
        paginate={paginate}
      />
    </StyledTableWrapper>
  );
};

export default Table;
