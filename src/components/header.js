import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import themes from '../themes/themes';
import Logo from '../../images/logo.svg';

const NavLink = styled(Link)`
  color: ${themes.text_primary};
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    color: ${themes.white};
  }
  transition: all 0.2s;
  font-weight: 600;
`;

export default function Header() {
  useEffect(() => {
    const header = document.querySelector('header');
    const scrollIndicator = document.querySelector('.scrollIndicator');
    const showHeaderLine = e => {
      if (!e[0].isIntersecting) {
        header.style.boxShadow = '0 6px 6px -6px #000';
        header.style.height = '50px';
        header.style.background = themes.yellow;
      } else {
        header.style.boxShadow = '0 0 0';
        header.style.height = '80px';
        header.style.background = 'transparent';
      }
    };
    const headerObserver = new IntersectionObserver(showHeaderLine, {
      root: null,
      threshold: 0,
    });
    headerObserver.observe(scrollIndicator);
  }, []);
  return (
    <header
      css={css`
        position: fixed;
        height: 50px;
        width: 100%;
        top: 0;
        transition: all 0.5s;
        z-index: 10;
      `}
    >
      <div
        css={css`
          display: flex;
          height: 100%;
          width: 100%;
          max-width: 1300px;
          margin: auto;
          align-items: center;
        `}
      >
        <NavLink
          css={css`
            margin-left: 15px;
            width: 80px;
          `}
          to="/"
        >
          <img width="100%" src={Logo} />
        </NavLink>
        <nav
          css={css`
            position: absolute;
            left: 50%;
            transform: translatex(-50%);
            width: 500px;
            display: flex;
            justify-content: center;
            * {
              &:hover {
                box-shadow: 0 2px 2px -2px #000;
              }
            }
          `}
        >
          <NavLink activeClassName="current-page" to="/">
            PRODUCT
          </NavLink>
          <NavLink activeClassName="current-page" to="/app/">
            APP
          </NavLink>
          <NavLink activeClassName="current-page" to="/get-started/">
            GET STARTED
          </NavLink>
          <NavLink activeClassName="current-page" to="/about/">
            ABOUT
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
