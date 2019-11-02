import styled from 'styled-components';

import colors from '../../configurations/colors.json';
import resolutions from '../../configurations/resolutions.json';

export const Wrapper = styled.article`
    background-color: white;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
    padding: 10px;
    margin: 26px 0;

    display: flex;
    flex-direction: column;

    @media (max-width: ${resolutions.medium}) {
        text-align: center;
    }

    @media (min-width: ${resolutions.medium}) {
        transition: transform 0.3s;

        :hover {
        transform: translateX(10px);
        }
    }
`;

export const Description = styled.p`
    margin: 0;
    @media screen and (max-width: ${resolutions.medium}) {
      order: 2;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${resolutions.medium}) {
        order: 1;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Themes = styled.div`
    @media (max-width: ${resolutions.medium}) {
        order: 2;
    }
`;

export const Theme = styled.div`
    height: 30px;
    width: auto;
`;

export const Date = styled.span`
    opacity: 0.33;
    color: ${colors.dark};

    @media screen and (max-width: ${resolutions.medium}) {
        order: 1;
    }
`;
