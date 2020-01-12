import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

export default function Background(props) {
  let [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);
  const BackgroundImage = styled.img`
    position: absolute;
    width: ${props.width || '100%'};
    height: ${props.height || '100%'};
    top: ${props.top || 0};
    left: ${width < 1300 ? '0' : 'calc((100vw - 1300px) / -2)'};
    z-index: 0;
  `;
  return <BackgroundImage src={props.src} />;
}
