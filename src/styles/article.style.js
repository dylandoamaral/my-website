import styled from "styled-components"
import Img from "gatsby-image"

import colors from "../configurations/colors.json"
import resolutions from "../configurations/resolutions.json"

import { H1 } from "../styles/global.style"

export const Title = styled(H1)`
    text-align: center;
`

export const Feature = styled(Img)`
    width: 100% !important;
    height: 350px !important;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const Content = styled.div`
    margin: 0 180px;

    ${resolutions.medias.desktop}{
        margin: 0 160px;
    }

    ${resolutions.medias.tablet_landscape}{
        margin: 0 0;
    }

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