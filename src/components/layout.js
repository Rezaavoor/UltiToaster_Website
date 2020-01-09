import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/core';
import themes from '../themes/themes';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

export default function Layout({ children }) {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          html,
          body {
            margin: 0;
            line-height: 1.4;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
              'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 15px;
            background-color: ${themes.yellow};
            color: ${themes.text_primary};
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        <div //by using intersectionObeserver we determine when the user scrolls over this hidden div, then we show the bottom shadow of the header
          className="scrollIndicator"
          css={css`
            position: absolute;
          `}
        />
        {children}
      </main>
      <h3>FOOTER</h3>
    </>
  );
}
