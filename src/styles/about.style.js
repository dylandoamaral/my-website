import styled from 'styled-components';
import Img from "gatsby-image"

import colors from '../configurations/colors.json';
import resolutions from '../configurations/resolutions.json';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding-left: 90px;
    padding-right: 90px;
    padding-top: 30px;
    margin: 0;

    text-align: justify;

    @media (max-width: ${resolutions.large}) {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media (max-width: ${resolutions.medium}) {
        padding-left: 20px;
        padding-right: 20px;

    }
`;

export const Picture = styled(Img)`
    border-radius: 50%;
    align-self: center;
    margin-bottom: 20px;
`;

export const Catchphrase = styled.span`
    font-size: 32px;
    text-align: center;
    color: ${colors.primary};
    margin-bottom: 20px;
`;
