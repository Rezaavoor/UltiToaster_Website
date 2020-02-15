import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { mediaQueries as mq } from '../themes/themes';

export default function Background(props) {
  let [width, setWidth] = useState(() => {
    if (typeof window !== 'undefined') return window.innerWidth;
  });
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);
  //prettier-ignore
  const BackgroundImage = styled.img`
    position: absolute;
    width: ${props.width || '100%'};
    height: ${props.height || '100%'};
    top: ${props.top || 0};
    left: ${width < 1300 ? '0' : 'calc((100vw - 1300px) / -2)'};
    /*this is special occasion for our dear get-started background because he thinks he needs more attention :) */
    left: ${props.getStarted && ( width>1300?'calc((100vw - 1300px) / 15)':'calc((100vw - 1300px) / 2)')};
    ${mq[2]}{
      width: ${props.getStarted && '100vw'};
      left: ${props.getStarted && 0};
    }
    /*special occasion ends */
    z-index: ${props.zIndex || 0};
  `;
  return <BackgroundImage src={props.src} />;
}
