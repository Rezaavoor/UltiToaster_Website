import React from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import themes from '../themes/themes';

export default function GetStarted() {
  return (
    <Layout>
      <div
        css={css`
          height: 80vh;
        `}
      >
        get started
      </div>
    </Layout>
  );
}
