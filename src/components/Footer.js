import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import themes from '../themes/themes';

export default function Footer() {
  const Container = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 500px;
    /* border: 1px solid black; */
    margin-bottom: 50px;
    text-align: center;
  `;
  const Contents = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `;
  const Content = styled.div`
    width: 33.3%;
    height: 100%;
    p {
      margin-top: 20px;
      line-height: 2;
    }
  `;
  return (
    <Container>
      <Contents>
        <Content>
          <h4>Product</h4>
          <p>
            Connecting via wifi <br />
            Using Raspberry Pi zero W <br />
            3D printed <br />
          </p>
        </Content>
        <Content>
          <h4>Contact Us</h4>
          <p>
            Reza Hosseini <br />
            Simon Vallin <br />
            Carl Foyer <br />
            Hamam Khalouf <br />
          </p>
        </Content>
        <Content>
          <h4>Blah Blah</h4>
        </Content>
      </Contents>
      <a
        href="https://www.github.com/rezaavoor"
        css={css`
          text-decoration: none;
          font-weight: 700;
          color: ${themes.text_secondary};
        `}
      >
        2020 Reza Hosseini
      </a>
    </Container>
  );
}
