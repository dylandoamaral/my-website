import styled from "styled-components"

import colors from "../configurations/colors.json"
import resolutions from "../configurations/resolutions.json"

import { P } from "../styles/global.style"

export const Showcase = styled.div`
    height: calc(100vh - 100px);
    min-height: 550px;
    max-height: 650px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
    overflow: hidden;

    ${resolutions.medias.phone} {
        margin: 0 -20px;
    }
`

export const Name = styled.h1`
    font-size: 70px;
    font-family: futura;
    color: ${colors.dark};
    
    ${resolutions.medias.phone} {
        font-size: 50px;
        margin-left: 20px;
    }
`

export const Titles = styled.div`
    display: flex;
    margin: 10px 0 20px 0;

    ${resolutions.medias.phone} {
        margin-left: 20px;
    }
`

export const Title = styled.span`
    writing-mode: vertical-lr;
    text-orientation: upright;

    font-weight: 500;
    color: ${props => (props.secondary ? colors.secondary : colors.primary)};
`

export const Image = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;

    height: 100%;
    width: auto;

    ${resolutions.medias.tablet_landscape} {
        height: 90%;
    }

    ${resolutions.medias.phone} {
        height: 75%;
        right: -140px;
    }
`

/*
width: 70%;
        height: auto;*/
export const Div = styled.div`
    margin: 30px 0;
`

export const Content = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;

    ${resolutions.medias.tablet_portrait} {
        flex-direction: column;
    }
`

export const Picture = styled.img`
    width: 40%;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.4);
    margin-right: 20px;

    ${resolutions.medias.tablet_portrait} {
        width: 100%;
        height: auto;
        margin-right: 0;
        margin-bottom: 20px;
    }
`

export const Description = styled(P)`
    margin: 0;
    padding: 0;
`

