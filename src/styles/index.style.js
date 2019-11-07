import styled from 'styled-components';

import colors from '../configurations/colors.json';
import resolutions from '../configurations/resolutions.json';

export const Wrapper = styled.div`
    min-height: calc(100vh - 200px);

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${resolutions.medium}) {
        min-height: calc(100vh - 250px);
    }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;
//margin-bottom: 30px;

export const Name = styled.span`
  font-size: 80px;
  font-family: cormorant;

  @media (max-width: ${resolutions.medium}) {
    font-size: 60px;
  }

  @media (max-width:${resolutions.little}) {
    font-size: 40px;
  }
`;

export const Job = styled.span`
    margin: -24px 0 0px 200px;
    font-family: cormorant;
    font-size: 60px;
    color: ${colors.primary};

  @media (max-width: ${resolutions.medium}) {
    font-size: 45px;
    margin: -15px 0 0px 150px;
  }

  @media (max-width:${resolutions.little}) {
    font-size: 30px;
    margin: -10px 0 0px 100px;
  }
`;