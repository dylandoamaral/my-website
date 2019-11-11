import styled from "styled-components"

import colors from "../configurations/colors.json"

export const A = styled.a`
    color: ${colors.primary};
`

export const P = styled.p`
    color: ${colors.dark};
    font-size: 20px;
    line-height: 1.6em;
`

export const H1 = styled.h1`
    margin: 0;
    color: ${colors.primary};
    font-size: 60px;
    font-weight: normal;
`

export const Span = styled.span`
    font-size: 16px;
    color: ${colors.dark};
`

export const Line = styled.hr`
    width: 200px;
    border: none;
    height: 1px;
    background-color: ${colors.dark};
    opacity: 0.33;
`
