import styled from "styled-components"

import colors from "../configurations/colors.json"
import fonts from "../configurations/fonts.json"

import Hr from "../components/hr/hr"


export const A = styled.a`
    color: ${colors.primary};
    font-size: ${fonts.sizes.normal};
`

export const P = styled.p`
    color: ${colors.dark};
    font-size: ${fonts.sizes.normal};
    line-height: 1.6em;
`

export const H1 = styled.h1`
    margin: 0;

    color: ${colors.primary};
    font-size: ${fonts.sizes.h1};
    font-weight: normal;

    font-family: futura;
`

export const H2 = styled.h2`
    margin: 0;

    color: ${colors.dark};
    font-size: ${fonts.sizes.h2};
    font-weight: normal;
    font-family: futura;
`

export const Span = styled.span`
    font-size: 16px;
    color: ${colors.dark};
`

export const Line = styled(Hr)``
