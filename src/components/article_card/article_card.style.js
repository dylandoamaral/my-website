import styled from 'styled-components';
import { Link } from "gatsby"
import Img from "gatsby-image"

import colors from '../../configurations/colors.json';
import resolutions from '../../configurations/resolutions.json';

export const Click = styled(Link)`
    text-decoration: none;
`;

export const Wrapper = styled.article`
    background-color: white;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
    margin: 26px 0;

    width: 100%;
    height: 340px;

    display: flex;
    flex-direction: row;

    @media (max-width: ${resolutions.medium}) {
        text-align: center;
        flex-direction: column-reverse;
        height: 600px;
    }

`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;

    @media (max-width: ${resolutions.medium}) {
        height: auto;
    }
`;

export const Description = styled.p`
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 7; /* number of lines to show */

    @media screen and (max-width: ${resolutions.medium}) {
      order: 2;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    
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

export const Feature = styled(Img)`
    width: 130% !important;
    height: 100% !important;

    @media (max-width: ${resolutions.medium}) {
        width: 100% !important;
    }
`;
