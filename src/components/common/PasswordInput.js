import React from 'react';
import styled from 'styled-components';

// passing attributes to components
const PasswordInput = styled.input.attrs({
  type: 'password'
})`
  border-radius: 3px;
  outline: none;
  border: 1px solid black;
  &:focus {
    border-color: red;
  }
`;

export default PasswordInput;
