import React from 'react';
import styled from '@emotion/styled';

import * as colours from './colours';
import * as fonts from './fonts';

const FullName = styled.h1`
  ${fonts.raleway}
  color: ${colours.primaryBlue};
`;

const JobTitle = styled.h2`
  ${fonts.raleway}
  color: ${colours.primaryBlueDark};
`;

const Header = () => (
  <>
    <FullName>Julien Mazé</FullName>
    <JobTitle>Senior Software Engineer (Javascript/React)</JobTitle>
  </>
);

export default Header;
