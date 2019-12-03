import styled from "styled-components"
import Img from "gatsby-image"

import colors from "../configurations/colors.json"
import resolutions from "../configurations/resolutions.json"
import margins from "../configurations/margins"

import { H1, H2 } from "../styles/global.style"

export const Title = styled(H1)`
    text-align: center;
`

export const Subtitle = styled(H2)`
    text-align: center;
    margin: 0;
`

export const Wrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    ${margins.inner_margin}
`


export const Feature = styled(Img)`
    width: 100% !important;
    height: 350px !important;
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