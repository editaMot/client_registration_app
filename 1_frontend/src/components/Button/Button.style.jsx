import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 1em;
  padding: ${(props) => (props.padding ? props.padding : '10px 40px')};
  color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
  border: none;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : 'tranparent'};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  margin: ${(props) => (props.margin ? props.margin : '0')};

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
