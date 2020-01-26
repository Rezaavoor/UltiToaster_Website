import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import themes from '../themes/themes';
import Background from '../components/Background';
import backgroundSvg from '../../images/app-background.svg';

export default function App() {
  return (
    <Layout>
      <div
        css={css`
          height: 2800px;
          position: relative;
        `}
      >
        <Background src={backgroundSvg} reverse width="100vw" height="2800px" />
        app
      </div>
    </Layout>
  );
}
