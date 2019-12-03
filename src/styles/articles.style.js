import styled from "styled-components"

import margins from "../configurations/margins"

import { P } from "../styles/global.style"

export const Wrapper = styled.div`
    ${margins.inner_margin}
`

export const Preface = styled.div`
    margin-top: 20px;
    text-align: center;
`

export const Description = styled(P)`
    margin: 10px 0 50px 0;
`

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`
