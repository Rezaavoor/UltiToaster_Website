import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import themes from '../themes/themes';

export default function App() {
  return (
    <Layout>
      <div
        css={css`
          height: 80vh;
        `}
      >
        app
      </div>
    </Layout>
  );
}
