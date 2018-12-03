import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

// pass bootstrap attributes in attrs and overvrite some styles using styled components
const PrimaryBootstrapButton = styled(Button).attrs({
  color: 'primary'
})`
  &:hover {
    color: black !important;
  }
`;

export default PrimaryBootstrapButton;
