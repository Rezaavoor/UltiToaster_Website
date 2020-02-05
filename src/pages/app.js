import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import themes from '../themes/themes';
import Thumbnails from '../components/Thumbnails';
import Background from '../components/Background';
import backgroundSvg from '../../images/app-background.svg';
import AppMain from '../components/AppMain';

export default function App() {
  //prettier-ignore
  const allThumbnails = (
    <>
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
          height: 2800px;
          width: 100%;
          max-width: 1300px; /* everything is this width except the background image */
          margin: auto;
          position: relative;
          border: 1px solid #00000000; /* a weird bug is fixed by just adding a hidden border to this guy! */
        `}
      >
        <Background src={backgroundSvg} width="100vw" height="2800px" />
        <AppMain />
        {allThumbnails}
      </div>
    </Layout>
  );
}
