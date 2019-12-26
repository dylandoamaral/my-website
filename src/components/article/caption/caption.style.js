import styled from "styled-components"

import colors from "../../../configurations/colors.json"
import { Span } from "../../../styles/global.style"

export const Wrapper = styled.div`
    width: 100%;
    text-align: center;
`

export const Text = styled(Span)`
    color: ${colors.dark};
    padding: 0;
    margin: 0;
`
