import styled from "styled-components"

import colors from "../../../configurations/colors.json"
import resolutions from "../../../configurations/resolutions.json"

import { Span } from "../../../styles/global.style"

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    ${resolutions.medias.tablet_portrait}{
        flex-direction: column;
    }
`

export const Container = styled.ul`
    margin: ${props => props.type === "pros" ? "0 10px 0 0" : "0 0 0 10px"};
    padding: 10px 15px;
    width: 100%;
    text-align: center;
    background-color: ${props => props.type === "pros" ? "#90E38A" : "#FDB1B1"};
    border-top: 10px solid ${props => props.type === "pros" ? "#61B45B" : "#FF6C6C"};

    ${resolutions.medias.tablet_portrait}{
        margin: 5px 0;
    }
`

export const Header = styled(Span)`
    margin: -30px 0 -15px 0;
    display: block;
    transform: rotate(${props => props.type === "pros" ? "0deg" : "45deg"});
    color: ${props => props.type === "pros" ? "#61B45B" : "#FF6C6C"};
    font-size: 50px;
`

export const Text = styled.li`
    text-align: left;
    color: ${colors.dark};
    opacity: 0.75;
    padding: 0;
    margin: 0 5px 0 20px;
`
