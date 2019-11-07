import styled from 'styled-components';

import resolutions from '../../configurations/resolutions.json';

export const Wrapper = styled.div`
  max-width: 360px;
  position: absolute;
  right: 0;
  font-size: 16px;

  padding-left: 30px;
  padding-right: 60px;

  @media screen and (max-width: ${resolutions.large}) {
    max-width: 220px;
    padding-right: 20px;
  }

  @media screen and (max-width: ${resolutions.medium}) {
    position: relative;
    max-width: 50%;
    right: 0;
    left: 0;
    padding: 0;
    margin: 20px auto;

  }

  .gatsby-resp-image-wrapper {
      max-width: 100% !important;
  }

  .gatsby-resp-image-image {
      box-shadow: none !important;
  }
`;