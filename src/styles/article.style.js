import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

import colors from "../configurations/colors.json"
import resolutions from "../configurations/resolutions.json"
import margins from "../configurations/margins"
import fonts from "../configurations/fonts.json"

import { H1, H2 } from "../styles/global.style"

export const Wrapper = styled.div`
    margin: 50px 0 20px 0;
`

export const Feature = styled(Img)`
    width: 100% !important;
    height: 270px !important;
    border-radius: 10px;
`

export const Article = styled.div`
    ${margins.article_margin}
`


export const Title = styled(H1)`
    text-align: left;
`

export const Subtitle = styled(H2)`
    color: ${colors.primary};
    margin: 0;
`

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
`

export const Back = styled(Link)`
    color: ${colors.primary};
    text-align: right;
    display: block;

    font-size: ${fonts.sizes.normal};
    line-height: 1.6em;
    letter-spacing: 0.05em;
`
