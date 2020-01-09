import React from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import themes from '../themes/themes';
import background from '../../images/product-background.svg';

export default function Product() {
  return (
    <Layout>
      <div
        css={css`
          height: 180vh;
          background-image: url('../../images/toaster.png');
        `}
      >
        This is the fkn UltiToaster product page
      </div>
    </Layout>
  );
}
