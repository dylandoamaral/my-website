import styled from 'styled-components';

import colors from '../../../configurations/colors.json';

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  background-color: #cce5ff;
  border-radius: 10px;
  border-top: 10px solid #b8daff;
  padding: 10px;
  text-align: justify;
`;

export const Emoji = styled.span`
  text-align: center;
  font-size: 32px;
  display: block;
  padding-bottom: 10px;
`;

export const Text = styled.span`
  font-size: 16px;
  color: ${colors.dark};
`;