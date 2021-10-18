import React from 'react';
import styled from '@emotion/styled';

import * as fonts from './fonts';
import * as colours from './colours';
import { mq } from './breakpoints';

import CVFile from './files/cv-julien-maze.pdf';

const DownloadButton = styled.div`
  ${fonts.raleway}
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: ${colours.downloadLinkBackground};
  transition: background-color 0.3s;

  ${mq('md')} {
    max-width: 300px;
    margin: auto;
  }
`;

const DownloadButtonLink = styled.a`
  text-align: center;
  display: block;
  padding: 0.6rem 0;
  font-size: 1.1rem;
  color: ${colours.downloadLinkColour};
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colours.downloadLinkBackgroundLight};
    color: #fff;
  }
`;

const DownloadCVButton = () => (
  <DownloadButton>
    <DownloadButtonLink href={CVFile} target="_blank">
      <i className="fa fa-fw fa-file-pdf-o download-cv__icon"></i>Download CV
    </DownloadButtonLink>
  </DownloadButton>
);

export default DownloadCVButton;
