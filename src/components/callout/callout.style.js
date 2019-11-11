import styled from "styled-components"

import colors from "../../configurations/colors.json"
import resolutions from "../../configurations/resolutions.json"

export const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    background-color: ${props => props.background};
    border-radius: 10px;
    border-top: 10px solid ${props => props.border};
    padding: 10px;

    display: flex;
    flex-direction: column;

    @media (max-width: ${resolutions.medium}) {
        border-top: none;
        border-left: 10px solid ${props => props.border};

        flex-direction: row;
        align-items: center;
        text-align: justify;
    }
`

export const Emoji = styled.span`
    text-align: center;
    font-size: 32px;
    display: block;
    padding-bottom: 10px;

    @media (max-width: ${resolutions.medium}) {
        padding-right: 10px;
        padding-bottom: 0px;
    }
`

export const Text = styled.span`
    font-size: 16px;
    color: ${colors.dark};
`
