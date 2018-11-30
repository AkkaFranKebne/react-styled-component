import React from 'react';
import styled, { css } from 'styled-components';

// styling added to Button element directly
const Button = styled.button`
  background: white;
  border: 5px solid black;
  font-size: 20px;
  color: blue;

  ${props =>
    // if props.danger exists do some css  (done instead of specific class, like btn-danger)
    props.danger &&
    css`
      background: red;
    `}
`;

export default Button;
