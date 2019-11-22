import styled from "styled-components"

import colors from "../configurations/colors.json"
import fonts from "../configurations/fonts.json"

import Hr from "../components/global/hr/hr"

export const H1 = styled.h1`
    margin: 0;

    color: ${colors.dark};
    font-size: ${fonts.sizes.h1};
    font-weight: normal;

    font-family: futura;
`

export const H2 = styled.h2`
    margin: 1.5em 0 0 0;

    color: ${colors.dark};
    font-size: ${fonts.sizes.h2};
    font-weight: normal;
    font-family: futura;
`

export const H3 = styled.h3`
    margin: 1.5em 0 0.5em 0;

    color: ${colors.dark};
    font-size: ${fonts.sizes.h3};
    font-weight: normal;
    font-family: futura;
`

export const Span = styled.span`
    font-size: 16px;
    color: ${colors.dark};
`

export const P = styled.p`
    color: ${colors.dark};
    font-size: ${fonts.sizes.normal};
    line-height: 1.6em;
    letter-spacing: 0.05em;
`


export const A = styled.a`
    color: ${colors.dark};
    font-size: ${fonts.sizes.normal};
    transition: color 0.2s ease-in;

    :hover {
        color: ${colors.primary};
    }
`

export const Li = styled.li`
    color: ${colors.dark};
    font-size: ${fonts.sizes.normal};
    line-height: 1.6em;
`

export const Line = styled(Hr)``
