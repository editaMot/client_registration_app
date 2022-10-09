import React, { useState } from 'react';
import axios from 'axios';
import { StyledRegWrapper, StyledFormInputWrapper } from './ClientReg.style';
import Button from '../../../../components/Button/Button';
import photo from '../../../../assets/images/photo.jpg';

const ClientReg = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const validateForm = () => {
    const { name, email, date, time } = form;
    const newError = {};

    if (!name || name === '') newError.name = 'Enter client name';
    if (!email || email === '') newError.email = 'Enter client email';
    if (!date || date === '') newError.date = 'Enter visitation date';
    if (!time || time === '') newError.time = 'Select visitation time';

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      const newClient = {
        name: form.name,
        email: form.email,
        date: form.date,
        time: form.time,
      };

      axios.post('http://localhost:5000/api/clients', newClient);

      window.location.reload(true);
    }
  };

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
    <StyledRegWrapper>
      <h3>Client registration</h3>
      <form>
        <StyledFormInputWrapper>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={(e) => setField('name', e.target.value)}
          />
          <span>{errors.name}</span>
        </StyledFormInputWrapper>

        <StyledFormInputWrapper>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={(e) => setField('email', e.target.value)}
          />
          <span>{errors.email}</span>
        </StyledFormInputWrapper>
        <StyledFormInputWrapper>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={form.date}
            onChange={(e) => setField('date', e.target.value)}
          />
          <span>{errors.date}</span>
        </StyledFormInputWrapper>
        <StyledFormInputWrapper>
          <label htmlFor="time">Time</label>
          <select
            id="time"
            autoComplete="off"
            value={form.time}
            onChange={(e) => setField('time', e.target.value)}
          >
            {visitationTime.map((time) => (
              <option value={time} key={time}>
                {time}
              </option>
            ))}
          </select>
          <span>{errors.time}</span>
        </StyledFormInputWrapper>

        <Button
          action={handleSubmit}
          text="Register"
          bgColor="#F2A099"
          margin="20px 0 0 40px"
        />
      </form>

      <img src={photo} alt="" />
    </StyledRegWrapper>
  );
};

export default ClientReg;
