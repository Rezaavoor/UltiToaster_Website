import React from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import themes, { mediaQueries as mq } from '../themes/themes';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Thumbnails from '../components/Thumbnails';
import Background from '../components/Background';
import backgroundSvg from '../../images/app-background.svg';
import AppMain from '../components/App/AppMain';
import Footer from '../components/Footer';

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
  const height = '2200px';
  const Info = styled.div`
    height: 620px;
    width: 100%;
    margin-top: 200px;
    display: flex;
    position: relative;
    flex-direction: row;
    color: ${themes.text_secondary};
    z-index: 1;
    ${mq[2]} {
      flex-direction: column-reverse;
      top: 100px;
      text-align: center;
    }
    ${mq[3]} {
      margin-top: 150px;
    }
  `;
  const InfoText = styled.div`
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    padding-right: 15%;
    line-height: 2rem;
    p {
      margin: 30px 0 20px 0;
      font-size: 1.2rem;
    }
    ${mq[1]} {
      padding-right: 0;
      padding-top: 15%;
    }
    ${mq[2]} {
      p:nth-last-of-type(odd) {
        text-align: start;
        margin: auto;
      }
      h2:nth-last-of-type(odd) {
        text-align: start;
        margin: 10px auto 0 auto;
      }
    }
    ${mq[3]} {
      font-size: 0.6rem;
      p {
        font-size: 1rem;
      }
    }
  `;
  const InfoImage = styled.div`
    height: 100%;
    flex-grow: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  `;
  const Image = styled(Img)`
    width: 70%;
    margin: auto;
    ${mq[2]} {
      width: 50%;
    }
    ${mq[3]} {
      width: 70%;
    }
  `;
  const { phonesImage } = useStaticQuery(graphql`
    query {
      phonesImage: file(relativePath: { eq: "phones-mockup.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <div
        css={css`
          height: ${height};
          width: 100%;
          max-width: 1300px; /* everything has this width except the background image */
          margin: auto;
          position: relative;
          border: 1px solid #00000000; /* a weird bug is fixed by just adding a hidden border to this guy! */
        `}
      >
        <Background src={backgroundSvg} width="100vw" height={height} />
        <AppMain />
        <Info>
          <InfoText>
            <h1>ALL YOU NEED IS YOUR PHONE</h1>
            <p>
              We designed the app in a way that makes you feel comfortable when
              using it. The great and simple design helps you get familiar with
              the app in just a second!
            </p>
            <h2>Use the app for:</h2>
            <p>
              - Ordering toast bread <br />
              - Scheduling toast bread <br />
              - Checking bread that is in queue <br />
              - Checking the amount of bread that is left <br />
            </p>
          </InfoText>
          <InfoImage>
            <Image fluid={phonesImage.sharp.fluid} />
          </InfoImage>
        </Info>
        <Footer height="400px" />
        {allThumbnails}
      </div>
    </Layout>
  );
}
