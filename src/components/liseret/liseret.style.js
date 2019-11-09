import styled, { keyframes } from 'styled-components';

import resolutions from '../../configurations/resolutions.json';

const liseretSlideTop = keyframes`
    from {
      transform: translateY(-100vh);
    }
    to {
      transform: translateY(0);
    }
`;

const liseretSlideLeft = keyframes`
    from {
      transform: translateX(-100vw);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const Canvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 130px;

    animation: ${liseretSlideTop} 0.6s ease-out;

    @media(max-width: ${resolutions.large}) {
        left: 80px;
    }

    @media(max-width: ${resolutions.medium}) {
        animation: ${liseretSlideLeft} 0.6s ease-out;

        left: 0;
        top: 110px;
    }

    @media (max-width:${resolutions.little}) {
      top: 125px;
    }
`;