import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import resolutions from "../../../configurations/resolutions.json"

export const Footer = styled.footer`
    height: 100px;
    padding: 20px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${resolutions.medias.phone} {
        flex-direction: column;
        margin-bottom: 50px;
    }
`

export const FooterLink = styled(OutboundLink)`
    text-decoration: none;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 40px;
    height: 40px;
`
