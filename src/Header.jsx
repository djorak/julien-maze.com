import React from 'react';
import styled from '@emotion/styled';

import * as colours from './colours';

const FullName = styled.h1`
  color: ${colours.primaryBlue};
`;

const JobTitle = styled.h2`
  color: ${colours.primaryBlueDark};
`;

const Header = () => (
  <>
    <FullName>Julien Mazé</FullName>
    <JobTitle>Senior Software Engineer (Javascript/React)</JobTitle>
  </>
);

export default Header;
