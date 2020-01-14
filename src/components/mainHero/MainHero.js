import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function MainHero() {
  const Image = styled(Img)`
    /* height: 100%; */
    width: 70%;
  `;
  const Text = styled.h1`
    width: 360px;
    height: 420px;
    padding: 80px;
    font-style: italic;
  `;
  const ImageContainer = styled.div`
    width: calc(
      1300px - 720px
    ); /* 720px is twice as Text's width which makes Imagecontainer be in center all the time(360px -- container -- 360px) */
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px black solid; */
  `;

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "toaster.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div /* main */
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 150px;
        height: 420px;
        position: relative;
        /* border: 1px black solid; */
        z-index: 1;
      `}
    >
      <Text>
        TAKE <br />
        YOUR LIFE <br />
        TO <br />
        ANOTHER <br />
        LEV3L <br />
      </Text>
      <ImageContainer>
        <Image fluid={image.sharp.fluid} />
        <p
          css={css`
            width: 20px;
          `}
        >
          indicator
        </p>
      </ImageContainer>
    </div>
  );
}
