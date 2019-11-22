import styled from "styled-components"
import { Link } from "gatsby"

import Img from "gatsby-image"

import colors from "../../../configurations/colors.json"
import { H2 } from "../../../styles/global.style"

export const Click = styled(Link)`
    text-decoration: none;

    flex: ${props => (props.first ? "1 1 100%" : "1 1 250px")};
    @media (max-width: 600px) {
        flex: 1 1 250px;
    }
`

export const Wrapper = styled.article`
    margin: 10px;

    background-color: white;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);

    display: flex;
    flex-direction: ${props => (props.first ? "row" : "column-reverse")};

    height: ${props => (props.first ? "340px" : "500px")};

    @media (max-width: 600px) {
        flex-direction: column-reverse;
        height: 500px;
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 10px;
`

export const Title = styled(H2)`
    margin: 0 20px;
    font-size: 32px;
    text-align: center;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Themes = styled.div`
    overflow: hidden;
`

export const Theme = styled(Img)`
    margin-right: 10px;
`

export const Date = styled.span`
    opacity: 0.33;
    color: ${colors.dark};
`

export const Feature = styled(Img)`
    width: 100% !important;
    height: 100% !important;
`
