import styled from 'styled-components';

import resolutions from '../../configurations/resolutions.json';

export const Layout = styled.div`
  padding: 0;
  margin: 0 360px;
  
  height: 100%;

  @media screen and (max-width: ${resolutions.large}) {
    margin: 0 240px;
  }

  @media screen and (max-width: ${resolutions.medium}) {
    margin: 0 32px;
  }

  @media screen and (max-width: ${resolutions.little}) {
    margin: 0 10px;
  }
`