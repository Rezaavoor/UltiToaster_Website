import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import themes, { mediaQueries as mq } from '../themes/themes';
import Thumbnails from '../components/Thumbnails';
import Background from '../components/Background';
import backgroundSvg from '../../images/get-started-background.svg';
import backgroundSvgMobile from '../../images/get-started-background-mobile.svg';

export default function GetStarted() {
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
  const [height, setHeight] = useState(() => {
    if (typeof window !== 'undefined')
      return window.innerWidth > 768 ? '1500px' : '1000px';
  });
  const [background, setBackground] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 768) return backgroundSvg;
      else return backgroundSvgMobile;
    }
  }); //use different background in phone devices
  useEffect(() => {
    window.addEventListener('resize', () => {
      //use mobile background for devices smaller than 768
      if (window.innerWidth < 768) {
        setHeight('1000px');
        setBackground(backgroundSvgMobile);
      } else {
        setHeight('1500px');
        setBackground(backgroundSvg);
      }
    });
  }, []);
  return (
    <Layout>
      <div
        css={css`
          height: ${height};
          width: 100%;
          max-width: 1300px; /* everything is this width except the background image */
          margin: auto;
          position: relative;
          border: 1px solid #00000000; /* a weird bug is fixed by just adding a hidden border to this guy! */
        `}
      >
        <Background
          width="1300px"
          height={height}
          zIndex="1"
          getStarted
          src={background}
        />
        <h1
          css={css`
            position: absolute;
            font-style: italic;
            top: 160px;
            left: 18%;
            z-index: 1;
            ${mq[1]} {
              left: 10%;
            }
            ${mq[2]} {
              br {
                display: none;
              }
              top: 100px;
              left: 5%;
              font-size: 1.2rem;
            }
          `}
        >
          BEFORE <br />
          YOU CAN <br />
          ULTITOAST:
        </h1>
        {allThumbnails}
      </div>
    </Layout>
  );
}
