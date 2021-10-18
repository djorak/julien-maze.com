import React from 'react';
import styled from '@emotion/styled';

import * as fonts from './fonts';
import CVFile from './files/cv-julien-maze.pdf';

const DownloadButtonLink = styled.a`
  ${fonts.raleway}
`;

const DownloadCVButton = () => (
  <DownloadButtonLink
    href={CVFile}
    className="download-cv__link"
    target="_blank"
  >
    <i className="fa fa-fw fa-file-pdf-o download-cv__icon"></i>Download CV
  </DownloadButtonLink>
);

export default DownloadCVButton;
