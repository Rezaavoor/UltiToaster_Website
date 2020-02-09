import React from 'react';
import themes, { mediaQueries as mq } from '../../themes/themes';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
export default function AppMain() {
  const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 1;
    ${mq[3]} {
      flex-direction: column;
    }
  `;
  const Image = styled(Img)`
    /* height: 100%; */
    width: 40%;
    box-shadow: 20px 20px 25px 0px rgba(0, 0, 0, 0.2);
    border-radius: 35px;
    ${mq[2]} {
      border-radius: 25px;
    }
  `;
  const Text = styled.h1`
    width: 32.5%;
    height: 420px;
    padding: 6%;
    font-style: italic;
    position: relative;
    ${mq[1]} {
      margin-top: 50px;
    }
    ${mq[2]} {
      font-size: 1.5rem;
    }
    ${mq[3]} {
      width: 80%;
      /* top: -20px; */
      top: 0px;
      margin-top: 0;
      padding: 0;
      height: 20%;
      text-align: center;
      br {
        display: none;
      }
    }
  `;
  const ImageContainer = styled.div`
    width: 35%;
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
      /* width: 500px; */
    }
    ${mq[3]} {
      width: 100%;
      /* top: -80px; */
      top: 0px;
      height: 80%;
    }
  `;
  const GetStartedButton = styled(Link)`
    background-color: ${themes.yellow_light};
    height: 55px;
    width: 200px;
    border-radius: 55px;
    border: 2px solid ${themes.white};
    color: ${themes.text_secondary};
    text-align: center;
    vertical-align: center;
    line-height: 55px;
    text-decoration: none;
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
      top: 70px;
    }
  `;

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "phone-main.png" }) {
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
        ${mq[3]} {
          top: -40px;
        }
      `}
    >
      <ProductContainer>
        <Text>
          MADE <br />
          FOR <br />
          EVERYONE <br />
        </Text>
        <ImageContainer>
          <Image fluid={image.sharp.fluid} />
        </ImageContainer>
        <Text
          css={css`
            text-align: center;
            ${mq[3]} {
              display: none;
            }
          `}
        >
          COMPATIBLE <br />
          WITH <br />
          EVERY <br />
          DEVICE
        </Text>
      </ProductContainer>
      <GetStartedButton to="/get-started/">GET STARTED</GetStartedButton>
    </section>
  );
}
