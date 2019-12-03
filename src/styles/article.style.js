import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

import colors from "../configurations/colors.json"
import resolutions from "../configurations/resolutions.json"
import margins from "../configurations/margins"
import fonts from "../configurations/fonts.json"

import { H1, H2 } from "../styles/global.style"

export const Title = styled(H1)`
    text-align: left;
    ${margins.inner_margin}
`

export const Subtitle = styled(H2)`
    color: ${colors.primary};
    ${margins.inner_margin}
    margin: 0;
`

export const Wrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`

export const Feature = styled(Img)`
    width: 100% !important;
    height: 250px !important;
    border-radius: 10px;
`

export const Content = styled.div`
    ${margins.inner_margin}

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
`

export const Back = styled(Link)`
    ${margins.inner_margin}
    color: ${colors.primary};
    text-align: right;
    display: block;

    font-size: ${fonts.sizes.normal};
    line-height: 1.6em;
    letter-spacing: 0.05em;
`
