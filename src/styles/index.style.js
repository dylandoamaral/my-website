import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import colors from "../configurations/colors.json"
import resolutions from "../configurations/resolutions.json"
import margins from "../configurations/margins"

import { P, H1 } from "../styles/global.style"

/*
 * GLOBAL
 */
export const Container = styled.div``

export const Title = styled(H1)`
    margin: 80px 0;
    ${resolutions.medias.phone} {
        margin: 80px 0 20px 0;
    }
`

export const Primary = styled.span`
    color: ${colors.primary};
`

export const Secondary = styled.span`
    color: ${colors.secondary};
`

/*
 * SHOWCASE
 */
export const RoleList = styled.div`
    display: flex;
    height: 420px;

    ${resolutions.medias.phone} {
        margin-left: 20px;
    }
`

export const Role = styled.span`
    writing-mode: vertical-lr;
    text-orientation: upright;

    font-weight: 500;
    color: ${props => (props.secondary ? colors.secondary : colors.primary)};
`

export const Social = styled.div`
    display: flex;
    margin-left: 10px;

    ${resolutions.medias.phone} {
        flex-direction: column;
    }
`

export const SocialLink = styled(OutboundLink)`
    text-decoration: none;
    margin: 0 5px;

    padding: 12px;
    background-color: white;
    height: 49px;
    border-radius: 50%;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

    ${resolutions.medias.phone} {
        margin: 5px 0;
    }
`

export const ShowcaseContainer = styled.div`
    height: calc(100vh - 64px);
    min-height: 550px;
    max-height: 700px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
    overflow: hidden;

    ${resolutions.medias.phone} {
        margin: 0 -20px;
    }
`

export const ShowcaseName = styled.h1`
    font-size: 70px;
    font-family: futura;
    color: ${colors.dark};

    margin: 0;

    ${resolutions.medias.phone} {
        font-size: 11.1vw;
        margin-left: 20px;
    }
`

export const ShowcaseContent = styled.div`
    margin: 10px 0 20px 0;
    display: flex;
`

export const ShowcaseImage = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;

    height: 100%;
    width: auto;

    ${resolutions.medias.tablet_landscape} {
        height: 80%;
    }

    ${resolutions.medias.phone} {
        height: 450px;
        right: -140px;
    }
`

/*
 * CITATION
 */
export const CitationContainer = styled.div`
    ${margins.anti_outer_margin}
    background-color: ${colors.light};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
`

export const CitationContent = styled.div`
    ${margins.full_margin}
`

export const CitationBr = styled.div`
    display: block;
    height: 0;
`

export const CitationText = styled.p`
    margin: 0 8px;

    display: inline-block;

    font-family: futura;
    font-weight: 600px;
    font-size: 45px;
    text-transform: uppercase;
    line-height: 1.2;

    ${resolutions.medias.phone} {
        display: block;
    }
`

export const CitationTextOne = styled(CitationText)`
    ${resolutions.medias.phone} {
        font-size: 20vw;
    }
`

export const CitationTextTwo = styled(CitationText)`
    ${resolutions.medias.phone} {
        font-size: 11.5vw;
    }
`

export const CitationTextThree = styled(CitationText)`
    ${resolutions.medias.phone} {
        font-size: 18.3vw;
    }
`

export const CitationTextFour = styled(CitationText)`
    ${resolutions.medias.phone} {
        font-size: 13.4vw;
    }
`

/*
 * WEBSITE DESCRIPTION
 */
export const DescriptionContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${resolutions.medias.tablet_portrait} {
        flex-direction: column;
        align-items: center;
    }
    ${margins.inner_margin}

`

export const DescriptionImage = styled.div`
    flex: 1;

    min-height: 450px;

    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.4);
    border-radius: 10px;

    background-image: url("/index/forest.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    margin-right: 70px;

    ${resolutions.medias.tablet_portrait} {
        width: 100%;
        min-height: 300px;
        margin-right: 0;
        margin-bottom: 20px;
    }
`

export const DescriptionText = styled(P)`
    flex: 2.2;
    margin-left: 70px;

    ${resolutions.medias.tablet_portrait} {
        margin-left: 0;
    }
`

/*
 * CARDS
 */
export const CardsContainer = styled.div`
    ${margins.anti_outer_margin}
    background-color: ${colors.secondary};
    height: 200px;
    margin-bottom: 150px;

    ${resolutions.medias.phone} {
        height: 700px;
        margin-bottom: 150px;
    }
`

export const CardList = styled.div`
    ${margins.full_margin}

    display: flex;
    justify-content: space-between;
    
    padding-top: 100px;

    ${resolutions.medias.phone} {
        flex-direction: column;
        align-items: center;
    }
`

export const CardContainer = styled.div`
    width: 200px;
    height: 200px;

    background-color: white;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    ${resolutions.medias.phone} {
        margin-bottom: 50px;
        width: 80%;
        padding: 40px;
    }
`

export const CardTitle = styled(P)`
    margin: 0;
    padding: 0;
`
