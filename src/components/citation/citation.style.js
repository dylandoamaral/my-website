import styled from "styled-components"

import colors from "../../configurations/colors.json"
import fonts from "../../configurations/fonts.json"
import resolutions from "../../configurations/resolutions.json"

export const Wrapper = styled.div`
    background: ${colors.secondary};
    background: linear-gradient(0deg, #1D242A 0%, ${colors.secondary} 100%);

    margin: 0 -170px;

    
    width: calc(100vw - 10);

    display: flex;

    ${resolutions.medias.desktop} {
        margin: 0 -150px;
    }

    ${resolutions.medias.tablet_landscape} {
        margin: 0 -80px;
    }

    ${resolutions.medias.tablet_portrait} {
        margin: 0 -20px;
    }
`

export const Border = styled.div`
    margin: 65px 250px;

    ${resolutions.medias.desktop} {
        margin: 65px 250px;
    }

    ${resolutions.medias.tablet_landscape} {
        margin: 65px 80px;
    }

    ${resolutions.medias.tablet_portrait} {
        margin: 65px 30px;
    }

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
