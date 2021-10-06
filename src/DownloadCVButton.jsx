import React from 'react';

import CVFile from './files/cv-julien-maze.pdf';

const DownloadCVButton = () => (
  <div className="download-cv">
    <a href={CVFile} className="download-cv__link" target="_blank">
      <i className="fa fa-fw fa-file-pdf-o download-cv__icon"></i>Download CV
    </a>
  </div>
);

export default DownloadCVButton;
