import { Link } from "gatsby"

import styled from "styled-components"

import colors from "../../configurations/colors.json"
import resolutions from "../../configurations/resolutions.json"
import fonts from "../../configurations/fonts.json"

export const Wrapper = styled.header`
    padding: 20px 0;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`

export const Navigation = styled.nav`
    ${resolutions.medias.phone} {
        display: none;
        
    }
`

export const BurgerNavigation = styled.nav`
    display: none;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
    margin: 0 -20px 20px -20px;

    ${resolutions.medias.phone} {
        display: ${props => props.isToggle === "true" ? "flex" : "none"};
        flex-direction: column;
        align-items: center;
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

export const BurgerNavlink = styled(Link)`
    margin: 10px 0;

    text-decoration: none;
    font-size: ${fonts.sizes.normal};
    color: ${props => (props.on === "true" ? colors.primary : colors.dark)};

    :hover {
        color: ${colors.primary};
    }
`

export const BurgerSeparation = styled.hr`
    width: 70%;
    border: none;
    height: 1px;
    background-color: ${colors.dark};
    opacity: 0.15;
`
    

export const Bread = styled.a`
    width: 30px;
    height: 25px;

    cursor: pointer;

    display: none;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    ${resolutions.medias.phone} {
        display: flex;
    }
`

export const Slice = styled.div`
    background-color: ${colors.dark};
    width: ${props => (props.size === "small" ? "60%" : "100%")};
    height: 4px;
    border-radius: 2px;
`
