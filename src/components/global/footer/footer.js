import React from "react";

import { Footer, FooterLink } from "./footer.style";
import { Span } from "../../../styles/global.style";

import TwitterIcon from "../../../assets/images/icons/twitter.svg";
import LinkedinIcon from "../../../assets/images/icons/linkedin.svg";
import GithubIcon from "../../../assets/images/icons/github.svg";
import CVIcon from "../../../assets/images/icons/cv.svg";
import BuyMeACoffeeIcon from "../../../assets/images/icons/buymeacoffee.svg";

import CV from "../../../assets/documents/cv.pdf";

export default () => (
    <Footer>
        <div>
            <FooterLink href="https://www.linkedin.com/in/dylandoamaral/">
                <LinkedinIcon style={{ width: "40px", height: "40px" }} />
            </FooterLink>
            <FooterLink href="https://github.com/dylandoamaral">
                <GithubIcon style={{ width: "40px", height: "40px" }} />
            </FooterLink>
            <FooterLink href="https://www.buymeacoffee.com/dylandoamaral">
                <BuyMeACoffeeIcon style={{ width: "40px", height: "40px" }} />
            </FooterLink>
            <FooterLink href="https://twitter.com/dylandmrl">
                <TwitterIcon style={{ width: "40px", height: "40px" }} />
            </FooterLink>
            <FooterLink href={CV} download>
                <CVIcon style={{ width: "40px", height: "40px" }} />
            </FooterLink>
        </div>
        <Span style={{ textAlign: "center" }}>
            Fait avec{" "}
            <span role="img" aria-label="amour">
                💛
            </span>{" "}
            par Dylan Do Amaral
        </Span>
        <Span>Mise à jour en Novembre 2021</Span>
    </Footer>
);
