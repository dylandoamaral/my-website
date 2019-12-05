import styled from "styled-components"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Img from "gatsby-image"

import colors from "../../../configurations/colors.json"
import margins from "../../../configurations/margins"
import resolutions from "../../../configurations/resolutions.json"

import { H2, H3, P } from "../../../styles/global.style"

export const Wrapper = styled.div`
    padding: 40px 0;
    ${margins.anti_full_margin}

    background-color: ${props => props.even === "false" ? colors.light : "none"};
`
export const InnerClick = styled(Link)`
    text-decoration: none;
    ${margins.full_margin}

    display: flex;
    ${resolutions.medias.tablet_portrait} {
        flex-direction: column-reverse;
    }
`

export const OuterClick = styled(OutboundLink)`
    text-decoration: none;
    ${margins.full_margin}

    display: flex;
    ${resolutions.medias.tablet_portrait} {
        flex-direction: column-reverse;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    
    margin-right: 60px;
    ${resolutions.medias.tablet_portrait} {
        margin-right: 0px;
    }
`

export const Feature = styled(Img)`
    width: 225px !important;
    height: 225px !important;
    
    border-radius: 10px;

    ${resolutions.medias.tablet_portrait} {
        width: 100% !important;
        height: 250px !important;
    }
`

export const Header = styled.div``

export const Title = styled(H2)`
    margin: 10px 0 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-height: 1; /* fallback */
    max-height: 1 * 2; /* fallback */
`

export const Subtitle = styled(H3)`
    margin: 5px 0 0 0;
    color: ${colors.primary};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-height: 1; /* fallback */
    max-height: 1 * 2; /* fallback */
`

export const Description = styled(P)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-height: 1; /* fallback */
    max-height: 1 * 3; /* fallback */

    ${resolutions.medias.tablet_portrait} {
        -webkit-line-clamp: 4; /* number of lines to show */
        max-height: 1 * 4; /* fallback */
    }
`

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Themes = styled.div`
    overflow: hidden;
    height: 20px;
`

export const Theme = styled(Img)`
    margin-right: 10px;
`

export const Date = styled.span`
    opacity: 0.33;
    color: ${colors.dark};
`
