import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    width: ${props => props.width};
    margin: 10px;
  }
`;