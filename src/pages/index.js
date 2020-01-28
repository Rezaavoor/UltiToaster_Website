import React from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import Background from '../components/Background';
import backgroundSvg from '../../images/product-background.svg';
import ultiToasterSvg from '../../images/UltiToaster.svg';
import Thumbnails from '../components/Thumbnails';
import MainHero from '../components/mainHero/MainHero';
import ProductInfo from '../components/ProductInfo';
import Footer from '../components/Footer';
import { mediaQueries as mq } from '../themes/themes';

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
          ${mq[2]}{
            width: 100%;
          }
        `} />
      <Thumbnails animate={{to:{x:'-50vw',y:'0'},duration:'50s'}} dotsDarkSmall width="100px" height="235px" left="90%" top="-44px" />
      <Thumbnails animate={{to:{x:'100px',y:'0'},duration:'30s'}} dotsLightSmall width="230px" height="352px" left="0" top="200px" opacity="0.5" />
      <Thumbnails animate={{to:{x:'100px',y:'-50px'},duration:'40s'}} smile width="200px" height="400px" left="65%" top="250px" />
      <Thumbnails animate={{to:{x:'-50vw',y:'-50px'},duration:'40s'}} smile width="200px" height="400px" left="50%" top="1150px" />
      <Thumbnails animate={{to:{x:'0px',y:'-50px'},duration:'20s'}} dotsDark width="400px" height="235px" left="30px" top="650px" />
      <Thumbnails animate={{to:{x:'100px',y:'50px'},duration:'35s'}} dotsDark width="400px" height="235px" left="-30px" top="1500px" />
      <Thumbnails dotsLight width="800px" height="352px" left="50%" top="800px" opacity="0.5" />
      <Thumbnails animate={{to:{x:'80vw',y:'0px'},duration:'60s'}} dotsLightSmall width="150px" height="352px" left="-30px" top="2000px" opacity="0.8" />
    </>
  );
  return (
    <Layout>
      <div
        css={css`
          height: 3200px;
          width: 100%;
          max-width: 1300px; /* everything is this width except the background image */
          margin: auto;
          position: relative;
          border: 1px solid #00000000; /* a weird bug is fixed by just adding a hidden border to this guy! */
        `}
      >
        <Background src={backgroundSvg} width="100vw" height="3200px" />
        <MainHero />
        <ProductInfo />
        <Footer />
        {allThumbnails}
      </div>
    </Layout>
  );
}
