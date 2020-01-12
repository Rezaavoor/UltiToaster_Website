import React from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import themes from '../themes/themes';
import Background from '../components/Background';
import backgroundSvg from '../../images/product-background.svg';
import ultiToasterSvg from '../../images/UltiToaster.svg';
import Thumbnails from '../components/Thumbnails';

export default function Product() {
  //prettier-ignore
  const allThumbnails = (
    <>
      <img src={ultiToasterSvg}
        css={css`
          width: 700px;
          position: absolute;
          right: 0;
          top: 600px;
        `} />
      <Thumbnails dotsDarkSmall width="100px" height="235px" left="90%" top="-44px" />
      <Thumbnails dotsLightSmall width="230px" height="352px" left="0" top="200px" opacity="0.5" />
      <Thumbnails smile width="200px" height="400px" left="85%" top="250px" />
      <Thumbnails smile width="200px" height="400px" left="50%" top="1150px" />
      <Thumbnails dotsDark width="400px" height="235px" left="-30px" top="1000px" />
      <Thumbnails dotsLight width="800px" height="352px" left="50%" top="1400px" opacity="0.5" />
      <Thumbnails dotsLightSmall width="150px" height="352px" left="-30px" top="2000px" opacity="0.8" />
    </>
  );
  return (
    <Layout>
      <div
        css={css`
          height: 3200px;
          width: 1300px; /* everything is this width except the background image */
          margin: auto;
          position: relative;
          /* border: 1px solid black; */
        `}
      >
        <Background src={backgroundSvg} width="100vw" height="3200px" />
        <p css={css``}>This is the fkn UltiToaster product page</p>
        {allThumbnails}
      </div>
    </Layout>
  );
}
