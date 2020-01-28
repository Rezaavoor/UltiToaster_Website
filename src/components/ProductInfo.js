import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import themes, { mediaQueries as mq } from '../themes/themes';

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
  ${mq[2]} {
    margin-top: 150px;
  }
  ${mq[3]} {
    margin-top: 100px;
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
  ${mq[2]} {
    flex-direction: column;
    &:nth-last-of-type(odd) {
      flex-direction: column-reverse;
    }
    height: 420px;
    margin-top: 10px;
  }
`;
const ImageContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  ${mq[3]} {
    width: 60%;
  }
`;
const TextContainer = styled.div`
  width: 60%;
  position: relative;
  top: -20px;
  font-size: 1.2rem;
  h1 {
    margin-bottom: 20px;
  }
  ${mq[2]} {
    width: 90%;
    text-align: center;
  }
  ${mq[3]} {
    font-size: 1rem;
    h1 {
      font-size: 1.4rem;
    }
  }
`;
const Image = styled(Img)`
  width: 70%;
  ${mq[1]} {
    width: 90%;
  }
  ${mq[2]} {
    width: 100%;
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
          <Image fluid={image.sharp.fluid} />
        </ImageContainer>
        <TextContainer>
          <h1>Do everything from your bed!</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
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
            et ea rebum.
          </p>
        </TextContainer>
        <ImageContainer>
          <Image fluid={image.sharp.fluid} />
        </ImageContainer>
      </Info>
      <Info>
        <ImageContainer>
          <Image fluid={image.sharp.fluid} />
        </ImageContainer>
        <TextContainer>
          <h1>Have your app in multiple devices</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
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
            et ea rebum.
          </p>
        </TextContainer>
        <ImageContainer>
          <Image fluid={image.sharp.fluid} />
        </ImageContainer>
      </Info>
    </Infos>
  );
}
