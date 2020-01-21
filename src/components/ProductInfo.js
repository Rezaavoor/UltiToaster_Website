import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import themes from '../themes/themes';

const Infos = styled.div`
  width: 100%;
  margin-top: 300px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  div:nth-of-type(even) {
    div:nth-of-type(even) {
      justify-content: flex-end;
    }
  }
`;
const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 400px;
  color: ${themes.text_secondary};
`;
const ImageContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
`;
const TextContainer = styled.div`
  width: 60%;
  position: relative;
  top: -20px;
  font-size: 1.2rem;
  h1 {
    margin-bottom: 40px;
  }
`;
export default function ProductInfo() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "toaster-face.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Infos>
      <Info>
        <ImageContainer>
          <Img
            fluid={image.sharp.fluid}
            css={css`
              width: 70%;
            `}
          />
        </ImageContainer>
        <TextContainer>
          <h1>Do everything from your bed!</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam
          </p>
        </TextContainer>
      </Info>
      <Info>
        <TextContainer>
          <h1>Toast everywhere!</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam
          </p>
        </TextContainer>
        <ImageContainer>
          <Img
            fluid={image.sharp.fluid}
            css={css`
              width: 70%;
            `}
          />
        </ImageContainer>
      </Info>
      <Info>
        <ImageContainer>
          <Img
            fluid={image.sharp.fluid}
            css={css`
              width: 70%;
            `}
          />
        </ImageContainer>
        <TextContainer>
          <h1>Have your app in multiple devices</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam
          </p>
        </TextContainer>
      </Info>
      <Info>
        <TextContainer>
          <h1>Have your app in multiple devices</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam
          </p>
        </TextContainer>
        <ImageContainer>
          <Img
            fluid={image.sharp.fluid}
            css={css`
              width: 70%;
            `}
          />
        </ImageContainer>
      </Info>
    </Infos>
  );
}
