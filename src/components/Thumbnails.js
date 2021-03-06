import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import dotsLight from '../../images/dots-light.svg';
import dotsLightSmall from '../../images/dots-light-small.svg';
import dotsDark from '../../images/dots-dark.svg';
import dotsDarkSmall from '../../images/dots-dark-small.svg';
import smile from '../../images/big-smile.svg';

export default function Thumbnails(props) {
  const thumbnailMove = props => keyframes`
    from{
      transform: translate(0,0);
    }
    50%{
      transform: translate(${props.to.x},${props.to.y});
    }
    to{
      transform: translate(0,0);
    }
  `;

  const Dots = styled.img`
    position: absolute;
    width: ${props.width || '140px'};
    height: ${props.height || '275px'};
    left: ${props.left};
    top: ${props.top};
    opacity: ${props.opacity};
    z-index: 0;
    animation: ${props.animate ? thumbnailMove(props.animate) : ''}
      ${props.animate ? props.animate.duration : ''} infinite;
  `;
  const Smile = styled.img`
    position: absolute;
    width: ${props.width || '200px'};
    height: ${props.height || '600px'};
    left: ${props.left};
    top: ${props.top};
    opacity: ${props.opacity};
    z-index: 0;
    animation: ${props.animate ? thumbnailMove(props.animate) : ''}
      ${props.animate ? props.animate.duration : ''} infinite;
  `;

  if (props.dotsDark) return <Dots src={dotsDark} />;
  else if (props.dotsDarkSmall) return <Dots src={dotsDarkSmall} />;
  else if (props.dotsLight) return <Dots src={dotsLight} />;
  else if (props.dotsLightSmall) return <Dots src={dotsLightSmall} />;
  else return <Smile src={smile} />;
}
