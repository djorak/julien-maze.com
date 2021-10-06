import * as React from 'react';
import styled from '@emotion/styled';

import GithubCorner from './GithubCorner';
import Header from './Header';
import Contacts from './Contacts';
import DownloadCVButton from './DownloadCVButton';

const MainContainer = styled.div`
  height: 100%;
  position: relative;
`;

const InnerContainer = styled.div`
  padding: 2rem;

  // lobotomized owl selector
  * + * {
    margin-top: 1rem;
  }
`;

const Page = () => (
  <MainContainer>
    <GithubCorner />

    <InnerContainer>
      <Header />
      <Contacts />
      <DownloadCVButton />
    </InnerContainer>
  </MainContainer>
);

export default Page;
