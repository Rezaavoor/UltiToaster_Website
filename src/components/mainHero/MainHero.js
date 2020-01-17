import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import themes from '../../themes/themes';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import indicatorBaseImg from '../../../images/indicator-base.svg';

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
  const Indicator = styled.div`
    height: 70%;
    position: relative;
    top: -5%;
    left: -10%;
  `;
  const IndicatorBaseImg = styled.img`
    width: 42px;
    height: 100%;
    position: absolute;
  `;
  const Points = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
  `;
  const Point = styled.div`
    background: ${themes.white};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    transition: all 0.3s;

    &:hover {
      // prettier-ignore
      /* background: ${themes.text_primary}; */
      width: 15px;
      height: 15px;
      box-shadow: 0px 0px 20px 10px ${themes.white};
      transform: translate(-2.5px, 2.5px);
      &:first-child {
        transform: translate(-2.5px, -2.5px); /* because i dont know! first point was different somehow! */
      }
    }
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
    <section /* main */
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
        <Indicator>
          <IndicatorBaseImg src={indicatorBaseImg} />
          <Points>
            <Point className="1" css={css``} />
            <Point
              className="2"
              css={css`
                bottom: 75%;
                left: calc(
                  28px - 5px
                ); /*hard coded. Might need adjustment in mobile design */
              `}
            />
            <Point
              className="3"
              css={css`
                bottom: 50%;
                left: calc(41px - 5px);
              `}
            />
            <Point
              className="4"
              css={css`
                bottom: 25%;
                left: calc(
                  32px - 5px
                ); /*hard coded. Might need adjustment in mobile design */
              `}
            />
            <Point
              className="5"
              css={css`
                bottom: 0;
              `}
            />
          </Points>
        </Indicator>
      </ImageContainer>
    </section>
  );
}
