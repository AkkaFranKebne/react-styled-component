import React from 'react';
import styled, { css } from 'styled-components';

// styling added to Button element directly
const ButtonStyled = styled.button`
  background: ${props => props.theme.backgroundColor};
  border: 1px solid ${props => props.theme.primaryColor};
  font-size: 20px;
  color: ${props => props.theme.primaryColor};

  ${props =>
    // if props.danger exists do some css  (done instead of specific class, like btn-danger)
    props.danger &&
    css`
      background: red;
    `}
`;

export default ButtonStyled;
