import styled from 'styled-components';

export const StyledRegWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 850px;
  background-color: #737ebf;
  border-radius: 0 20px 20px 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  h3 {
    font-size: 2em;
    color: white;
    margin-left: 15px;
    text-align: center;
  }

  img {
    width: 320px;
    align-self: center;
    margin-top: 40px;
  }
`;

export const StyledFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 80%;
  padding: 0 0 0 40px;

  margin-bottom: 10px;

  input {
    height: 30px;
    border-radius: 0.4rem;
    border: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding-left: 10px;
    font-size: 1em;
    opacity: 0.9;
  }

  select {
    height: 35px;
    border-radius: 0.4rem;
    border: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 0 10px;
    font-size: 1em;
    opacity: 0.9;
  }

  label {
    opacity: 0.8;
    color: white;
    font-size: 1.2em;
  }

  span {
    color: #f2a099;
  }
`;
