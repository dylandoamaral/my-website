import styled from "styled-components"

import colors from "../../configurations/colors.json"
import fonts from "../../configurations/fonts.json"
import resolutions from "../../configurations/resolutions.json"
import margins from "../../configurations/margins"

export const Wrapper = styled.div`
    background: ${colors.secondary};
    background: linear-gradient(0deg, #1D242A 0%, ${colors.secondary} 100%);
    
    width: calc(100vw - 10);

    display: flex;

    ${margins.anti_outer_margin}
`

export const Border = styled.div`
    ${margins.full_margin}

    margin-top: 65px;
    margin-bottom: 65px;

    border-left: 1px solid ${colors.primary};
`

export const Quote = styled.p`
    margin: 0 0 0 10px;

    color: white;
    font-size: ${fonts.sizes.big};

    ${resolutions.medias.phone} {
        font-size: ${fonts.sizes.normal};
    }

    ::after{
        content: '|';
    }
`
