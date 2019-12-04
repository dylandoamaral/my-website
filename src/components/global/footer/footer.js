import React from "react"

import { Footer, FooterLink } from "./footer.style"
import { Span } from "../../../styles/global.style"

import TwitterIcon from "../../../assets/images/icons/twitter.svg"
import LinkedinIcon from "../../../assets/images/icons/linkedin.svg"
import GithubIcon from "../../../assets/images/icons/github.svg"
import CVIcon from "../../../assets/images/icons/cv.svg"

import CV from "../../../assets/documents/cv.pdf"

export default () => (
    <Footer>
        <div>
            <FooterLink href="https://www.linkedin.com/in/dylandoamaral/">
                <LinkedinIcon style={{ width: "40px", height: "40px" }} />
            </FooterLink>
            <FooterLink href="https://github.com/dylandoamaral">
                <GithubIcon style={{ width: "40px", height: "40px" }} />
            </FooterLink>
            <FooterLink href="https://twitter.com/DylanDoAmaral3">
                <TwitterIcon style={{ width: "40px", height: "40px" }} />
            </FooterLink>
            <FooterLink href={CV} download>
                <CVIcon style={{ width: "40px", height: "40px" }} />
            </FooterLink>
        </div>
        <Span>
            Fait avec{" "}
            <span role="img" aria-label="amour">
                💛
            </span>{" "}
            par Dylan Do Amaral
        </Span>
    </Footer>
)
