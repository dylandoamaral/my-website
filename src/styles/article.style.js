import styled from 'styled-components';
import Img from "gatsby-image"

import colors from '../configurations/colors.json';
import resolutions from '../configurations/resolutions.json';

export const Title = styled.h1`
    text-align: center;
`;

export const Feature = styled(Img)`
    width: 100% !important;
    height: 350px !important;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Content = styled.div`
    pre {
        background-color: ${colors.dark};
        padding: 20px 20px;
        margin: 0 40px;
        border-radius: 5px;
        color: white;
        font-size: 16px;
        font-family: cormorant;

        @media (max-width: ${resolutions.medium}) {
            margin: 0;
        }
    }
`;

export const H1 = styled.h2`
    margin: 1.5em 0 0.5em 0;
`