import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Helmet from "../components/global/helmet/helmet"
import Layout from "../components/global/layout/layout"

import {
    Container,
    Title,
    Primary,
    Secondary,
    Ippon,
    RoleList,
    Role,
    Social,
    SocialLink,
    ShowcaseContainer,
    ShowcaseName,
    ShowcaseContent,
    ShowcaseImage,
    CitationContainer,
    CitationContent,
    CitationBr,
    CitationTextOne,
    CitationTextTwo,
    CitationTextThree,
    CitationTextFour,
    DescriptionContainer,
    DescriptionImage,
    DescriptionText,
    CardsContainer,
    CardList,
    CardContainer,
    CardTitle,
} from "../styles/index.style"

import FlameIcon from "../assets/images/icons/flame.svg"
import NewspaperIcon from "../assets/images/icons/newspaper.svg"
import TrophyIcon from "../assets/images/icons/trophy.svg"

import TwitterIcon from "../assets/images/icons/twitter.svg"
import LinkedinIcon from "../assets/images/icons/linkedin.svg"
import GithubIcon from "../assets/images/icons/github.svg"
import CVIcon from "../assets/images/icons/cv.svg"

import CV from "../assets/documents/cv.pdf"

const Roles = () => (
    <RoleList>
        <Role>Data Engineer</Role>
        <Role>Bricoleur Numérique</Role>
        <Role>Enthousiaste</Role>
    </RoleList>
)

const Links = () => (
    <Social>
        <SocialLink href="https://www.linkedin.com/in/dylandoamaral/">
            <LinkedinIcon style={{ width: "25px", height: "25px" }} />
        </SocialLink>
        <SocialLink href="https://github.com/dylandoamaral">
            <GithubIcon style={{ width: "25px", height: "25px" }} />
        </SocialLink>
        <SocialLink href="https://twitter.com/dylandmrl">
            <TwitterIcon style={{ width: "25px", height: "25px" }} />
        </SocialLink>
        <SocialLink href={CV} download>
            <CVIcon style={{ width: "25px", height: "25px" }} />
        </SocialLink>
    </Social>
)

const Showcase = () => (
    <ShowcaseContainer>
        <ShowcaseName>Dylan Do Amaral</ShowcaseName>
        <ShowcaseContent>
            <Roles />
            <Links />
        </ShowcaseContent>
        <ShowcaseImage src={"/index/owl.png"} alt="owl" />
    </ShowcaseContainer>
)

const Citation = () => (
    <CitationContainer>
        <CitationContent>
            <CitationTextOne>Actuellement</CitationTextOne>
            <CitationTextTwo>
                <Secondary>Data Engineer</Secondary>
            </CitationTextTwo>
            <CitationBr />
            <CitationTextThree right={"true"}>
                pour <Ippon href="https://fr.ippon.tech/">Ippon</Ippon>
            </CitationTextThree>
            <CitationTextFour right={"true"}>
                <Ippon href="https://fr.ippon.tech/">Technologies</Ippon>
            </CitationTextFour>
        </CitationContent>
    </CitationContainer>
)

const Description = () => (
    <Container>
        <Title>Moi en quelques mots</Title>
        <DescriptionContainer>
            <DescriptionImage alt="landscape" />
            <div>
            <DescriptionText>
                Je suis un petit gars, étudiant de 5 ème année à {efrei()}{" "}
                actuellement en stage à {ippon()} en tant que Data Engineer.
                J'adore la programmation et suis fasciné par plein de domaines
                variés tels que la programmation fonctionnelle, la génération
                procédurale, l'IoT, le Big Data et j'en passe...
            </DescriptionText>
            <DescriptionText>
                De nature organisé et perfectionniste, j'adore produire un code
                propre, modulable et intelligent.
            </DescriptionText>
            </div>
        </DescriptionContainer>
    </Container>
)

const efrei = () => {
    return (
        <OutboundLink href="https://www.efrei.fr/campus-ecole-ingenieur/?gclid=EAIaIQobChMIhafMrKCJ6QIV0kPTCh0iUQIOEAAYASAAEgKctvD_BwE">
            Efrei
        </OutboundLink>
    )
}

const ippon = () => {
    return (
        <OutboundLink href="https://fr.ippon.tech/">
            Ippon Technologies
        </OutboundLink>
    )
}

const cardImageSize = "75px"
const Cards = () => (
    <Container>
        <Title>Trois choses sur moi</Title>
        <CardsContainer>
            <CardList>
                <CardContainer>
                    <FlameIcon
                        style={{ width: cardImageSize, height: cardImageSize }}
                    />
                    <CardTitle>
                        La <Primary>programmation</Primary> est{" "}
                        ma <Primary>passion</Primary>
                    </CardTitle>
                </CardContainer>
                <CardContainer>
                    <NewspaperIcon
                        style={{ width: cardImageSize, height: cardImageSize }}
                    />
                    <CardTitle>
                        Je suis <Primary>investi</Primary> et <Primary>curieux</Primary>
                    </CardTitle>
                </CardContainer>
                <CardContainer>
                    <TrophyIcon
                        style={{ width: cardImageSize, height: cardImageSize }}
                    />
                    <CardTitle>
                        J'adore les <Primary>challenges</Primary>
                    </CardTitle>
                </CardContainer>
            </CardList>
        </CardsContainer>
    </Container>
)

export default () => (
    <Layout page="index">
        <Helmet />
        <Showcase />
        <Citation />
        <Description />
        <Cards />
    </Layout>
)
