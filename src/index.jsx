import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react';

import Page from './Page';
import * as colours from './colours';

const PageWithGlobalStyles = () => (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
        }

        html {
          font-size: calc(0.8em + 1vw);

          @include desktop {
            font-size: 15pt;
          }
        }

        body {
          background-color: ${colours.pageBackground};
        }

        body,
        html {
          height: 100%;
        }
      `}
    />
    <Page />
  </>
);

ReactDOM.render(<PageWithGlobalStyles />, document.getElementById('root'));
