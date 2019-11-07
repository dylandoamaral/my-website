import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    width: 50% !important;
    margin: 10px;
  }

  > * > .gatsby-resp-image-wrapper {
    width: 100% !important;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  }
`;