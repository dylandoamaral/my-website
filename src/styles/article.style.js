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
    h1 {
        color: ${colors.dark};
        margin: 0;
        font-size: 40px;
        font-weight: normal;
    }

    h2 {
        color: ${colors.dark};
        font-size: 30px;
    }

    p {
        text-align: justify;
    }

    .gatsby-resp-image-wrapper {
        max-width: 90% !important;

        @media (max-width: ${resolutions.medium}) {
            max-width: 100% !important;
        }
    }
`;