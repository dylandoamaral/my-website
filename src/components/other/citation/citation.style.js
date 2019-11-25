import styled from "styled-components"

import colors from "../../../configurations/colors.json"
import margins from "../../../configurations/margins"
import resolutions from "../../../configurations/resolutions"
import fonts from "../../../configurations/fonts"

import { P } from "../../../styles/global.style"

export const Wrapper = styled.div`
    background: ${colors.secondary};
    background: linear-gradient(0deg, #1D242A 0%, ${colors.secondary} 100%);
    
    width: calc(100vw - 10);

    display: flex;

    ${margins.anti_outer_margin}
`

export const Border = styled.div`
    ${margins.full_margin}

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    text-align: center;

    margin: 40px 0;
`

export const Quote = styled.p`
    color: ${colors.primary};
    font-family: rockwell;
    margin: 0;

    font-size: 120px;
    margin-top: -40px;
    margin-bottom: -100px;

    ${resolutions.medias.phone} {
        font-size: 80px;
        margin-top: -30px;
        margin-bottom: -70px;
    }
`

export const Text = styled(P)`
    color: white;
    margin: 0;
    font-size: ${fonts.sizes.big};

    margin-top: 40px;

    ${resolutions.medias.phone} {
        font-size: ${fonts.sizes.normal};
    }
`
