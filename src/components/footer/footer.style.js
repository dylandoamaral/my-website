import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export const Footer = styled.footer`
    height: 100px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FooterLink = styled(OutboundLink)`
    text-decoration: none;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 40px;
    height: 40px;
`
