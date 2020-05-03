import styled from "styled-components";

import { Span } from "../../../styles/global.style";

import colors from "../../../configurations/colors.json";
import resolutions from "../../../configurations/resolutions.json";

export const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    background-color: ${props => props.background};
    border-radius: 10px;
    border-top: 10px solid ${props => props.border};
    padding: 10px;

    display: flex;
    flex-direction: column;

    ${resolutions.medias.tablet_landscape} {
        border-top: none;
        border-left: 10px solid ${props => props.border};

        flex-direction: row;
        align-items: center;
        text-align: left;
    }
`;

export const Emoji = styled(Span)`
    text-align: center;
    font-size: 32px;
    display: block;
    padding-bottom: 10px;

    ${resolutions.medias.tablet_landscape} {
        padding-right: 10px;
        padding-bottom: 0px;
    }
`;

export const Text = styled(Span)`
    color: ${colors.dark};
`;
