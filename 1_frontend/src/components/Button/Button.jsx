import React from 'react';
import { StyledButton } from './Button.style';

const Button = ({
  text,
  action,
  bgColor,
  fontColor,
  type,
  padding,
  margin,
}) => {
  return (
    <StyledButton
      onClick={action}
      bgColor={bgColor}
      fontColor={fontColor}
      type={type}
      padding={padding}
      margin={margin}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
