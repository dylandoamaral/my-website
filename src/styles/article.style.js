import styled from "styled-components";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink"

import colors from "../configurations/colors.json";
import resolutions from "../configurations/resolutions.json";
import fonts from "../configurations/fonts.json";

import { H1, H2 } from "../styles/global.style";

export const Wrapper = styled.div`
    margin: 50px 0 20px 0;
`;

export const Feature = styled(Img)`
    width: 100% !important;
    height: 500px !important;
    border-radius: 10px;

    @media (max-width: ${resolutions.medium}) {
        height: 250px !important;
    }
`;

export const Article = styled.div`
`;

export const Title = styled(H1)`
    text-align: center;
    font-size: 60px;

    @media (max-width: ${resolutions.medium}) {
        font-size: 40px;
    }
`;

export const Subtitle = styled(H2)`
    color: ${colors.primary};
    margin: 0;
`;

export const Content = styled.div`
    pre {
        background-color: ${colors.dark};
        padding: 20px 20px;
        margin: 0 80px;
        border-radius: 5px;
        color: white;
        font-size: 16px;

        @media (max-width: ${resolutions.medium}) {
            margin: 0;
        }
    }

    pre span {
        font-size: 16px;
        letter-spacing: 0.1em;
    }

    code:not(pre code) {
        font-size: 16px;
        letter-spacing: 0.1em;
        color: ${colors.dark};
        background-color: rgba(0, 0, 0, .08);
        padding: 3px;
        border-radius: 5px;
    }

    a {
        color: black;
        background-color: #A8E9B3;
        border-bottom: solid #51845a;
        text-decoration: none;
    }

    a:hover {
        background-color: #81FF97;
        border-bottom: solid #81D38F;
    }

    h2::before {
        content: '#';
        margin-right: 10px;
        color: #51845a;
    }
`;

export const Back = styled(AniLink)`
    color: ${colors.primary};
    text-align: right;
    display: block;

    font-size: ${fonts.sizes.normal};
    line-height: 1.6em;
    letter-spacing: 0.05em;
`;
