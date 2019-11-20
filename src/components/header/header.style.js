import { Link } from "gatsby"

import styled from "styled-components"

import colors from "../../configurations/colors.json"
import resolutions from "../../configurations/resolutions.json"
import fonts from "../../configurations/fonts.json"

export const Header = styled.header`
    padding: 20px 0;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${resolutions.medium}) {
        padding-bottom: 70px;
        height: 100px;
    }

    @media (max-width: ${resolutions.little}) {
        flex-direction: column;
    }
`

export const Logo = styled(Link)`
    text-decoration: none;
    font-family: "salute_riches";
    font-size: ${fonts.sizes.normal};
    color: ${colors.light};
    padding: 2px 5px;
    background-color: ${colors.dark};
    transition: opacity 0.3s;
    opacity: 1;

    :hover {
        opacity: 0.8;
    }

    @media (max-width: ${resolutions.little}) {
        margin-bottom: 20px;
    }
`

export const Navlink = styled(Link)`
    margin-left: 30px;

    text-decoration: none;
    font-size: ${fonts.sizes.normal};
    color: ${props => (props.on === "true" ? colors.primary : colors.dark)};

    :hover {
        color: ${colors.primary};
    }
`
