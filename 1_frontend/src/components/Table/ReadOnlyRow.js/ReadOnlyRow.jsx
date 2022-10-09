import React from 'react';
import Button from '../../Button/Button';

const ReadOnlyRow = ({ item, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={item._id}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.date.slice(0, 10)}</td>
      <td>{item.time}</td>
      <td>
        <Button
          text="Edit"
          bgColor="#7E8BD9"
          action={(e) => handleEditClick(e, item)}
          fontColor="white"
          padding="10px 30px"
          margin="0 5px 0 0"
        />
        <Button
          action={() => handleDeleteClick(item._id)}
          text="Delete"
          bgColor="#3D4A73"
          fontColor="white"
          padding="10px 22px"
          margin="0 0 0 5px"
        />
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
