import React from 'react';
import Button from '../../Button/Button';
import { StyledInput } from './EditableRow.style';

const EditableRow = ({
  editClientInfo,
  handleEditFormChange,
  handleCancelClick,
}) => {
  const generateWorkingHours = (start, finish) => {
    let workingHours = [];

    for (let i = start; i <= finish; i++) {
      let time00;
      let time30;

      time00 = `${i}:00`;
      workingHours.push(time00);

      if (i !== finish) {
        time30 = `${i}:30`;
        workingHours.push(time30);
      }
    }

    return workingHours;
  };

  const visitationTime = generateWorkingHours(8, 17);

  return (
    <tr>
      <td>
        <StyledInput
          type="text"
          name="name"
          onChange={handleEditFormChange}
          value={editClientInfo.name}
          required
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          onChange={handleEditFormChange}
          value={editClientInfo.email}
          required
        />
      </td>
      <td>
        <input
          type="date"
          name="date"
          onChange={handleEditFormChange}
          value={editClientInfo.date}
          required
        />
      </td>
      <td>
        <select
          id="time"
          onChange={handleEditFormChange}
          value={editClientInfo.time}
        >
          {visitationTime.map((time) => (
            <option value={time} key={time}>
              {time}
            </option>
          ))}
        </select>
      </td>
      <td>
        <Button
          type="submit"
          text="Save"
          bgColor="#F2A594"
          padding="10px 26px"
          margin="0 10px 0 0"
        />
        <Button
          type="button"
          action={handleCancelClick}
          text="Cancel"
          bgColor="#f46d61"
          padding="10px 20px"
        />
      </td>
    </tr>
  );
};

export default EditableRow;
