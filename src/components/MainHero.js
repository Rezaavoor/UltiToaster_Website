import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import themes, { mediaQueries as mq } from '../themes/themes';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import indicatorBaseImg from '../../images/indicator-base.svg';

export default function MainHero() {
  const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 1;
    ${mq[2]} {
      flex-direction: column;
    }
  `;
  const Image = styled(Img)`
    /* height: 100%; */
    width: 70%;
  `;
  const Text = styled.h1`
    width: 28%;
    height: 420px;
    padding: 6%;
    font-style: italic;
    position: relative;
    ${mq[1]} {
      margin-top: 50px;
    }
    ${mq[2]} {
      margin-top: 0;
      padding: 0;
      width: 80%;
      text-align: center;
      br {
        display: none;
      }
      font-size: 1.5rem;
      /* height: 80%; */
    }
    ${mq[3]} {
      top: -50px;
    }
  `;
  const ImageContainer = styled.div`
    width: 45%;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    ${mq[1]} {
      width: 70%;
    }
    ${mq[2]} {
      top: -50px;
    }
    ${mq[3]} {
      width: 100%;
      top: -80px;
    }
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
    cursor: pointer;
    &:hover {
      // prettier-ignore
      /* background: ${themes.text_primary}; */
      width: 15px;
      height: 15px;
      box-shadow: 0px 0px 20px 10px ${themes.white};
      transform: translate(-2.5px, 2.5px);
      &:first-of-type {
        transform: translate(-2.5px, -2.5px); /* because i dont know! first point was different somehow! */
      }
    }
  `;
  const BuyButton = styled.div`
    background-color: ${themes.yellow_light};
    height: 55px;
    width: 200px;
    border-radius: 55px;
    border: 2px solid ${themes.white};
    color: ${themes.text_secondary};
    text-align: center;
    vertical-align: center;
    line-height: 55px;
    font-weight: 800;
    letter-spacing: 0.1rem;
    text-shadow: 7px 7px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    left: 80px;
    top: -100px;
    z-index: 1;
    cursor: pointer;
    &:hover {
      border: 2px solid ${themes.yellow};
    }
    ${mq[2]} {
      top: -80px;
    }
    ${mq[3]} {
      height: 45px;
      line-height: 45px;
      font-size: 0.8rem;
      left: calc((100vw - 200px) / 2);
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
        height: 420px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        /* border: 1px white solid; */
        margin-top: 150px;
        z-index: 1;
      `}
    >
      <ProductContainer>
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
      </ProductContainer>
      <BuyButton>GET IT NOW</BuyButton>
    </section>
  );
}
