import React from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import themes from '../themes/themes';
import Background from '../components/Background';
import backgroundSvg from '../../images/get-started-background.svg';

export default function GetStarted() {
  return (
    <Layout>
      <div
        css={css`
          height: 210vh;
          position: relative;
        `}
      >
        <Background width="90%" top="100px" src={backgroundSvg} />
        get started
      </div>
    </Layout>
  );
}
