import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/global/layout/layout"

import {
    Container,
    Title,
    Primary,
    Secondary,
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

import PeopleIcon from "../assets/images/icons/people.svg"
import NewspaperIcon from "../assets/images/icons/newspaper.svg"
import EarIcon from "../assets/images/icons/ear.svg"

import TwitterIcon from "../assets/images/icons/twitter.svg"
import LinkedinIcon from "../assets/images/icons/linkedin.svg"
import GithubIcon from "../assets/images/icons/github.svg"
import CVIcon from "../assets/images/icons/cv.svg"

import CV from "../assets/documents/cv.pdf"

const Roles = () => (
    <RoleList>
        <Role>Data Engineer</Role>
        <Role>Bricoleur Numérique</Role>
        <Role>Bloggeur</Role>
    </RoleList>
)

const Links = () => (
    <Social>
        <SocialLink href="https://www.linkedin.com/in/dylan-do-amaral-431219112/">
            <LinkedinIcon style={{ width: "20px", height: "20px" }} />
        </SocialLink>
        <SocialLink href="https://github.com/dylandoamaral">
            <GithubIcon style={{ width: "20px", height: "20px" }} />
        </SocialLink>
        <SocialLink href="https://twitter.com/DylanDoAmaral3">
            <TwitterIcon style={{ width: "20px", height: "20px" }} />
        </SocialLink>
        <SocialLink href={CV} download>
            <CVIcon style={{ width: "20px", height: "20px" }} />
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
            <CitationTextOne>J'adore</CitationTextOne>
            <CitationTextTwo>
                <Primary>programmer</Primary>
            </CitationTextTwo>
            <CitationBr />
            <CitationTextThree right={"true"}>mais pas</CitationTextThree>
            <CitationTextFour right={"true"}>
                <Secondary>paramétrer</Secondary>
            </CitationTextFour>
        </CitationContent>
    </CitationContainer>
)

const Description = () => (
    <Container>
        <Title>Pourquoi ce site ?</Title>
        <DescriptionContainer>
            <DescriptionImage alt="landscape" />
            <DescriptionText>
                Ce site a été penser comme un mémoire, envers ma personne, censé
                regrouper les étapes importantes de ma vie et censé évoluer avec
                son temps. Je compte y inscrire des articles et des projets
                personnelles en premier lieux.
            </DescriptionText>
        </DescriptionContainer>
    </Container>
)

const cardImageSize = "75px"
const Cards = () => (
    <Container>
        <Title>Pour qui s'adresse t-il?</Title>
        <CardsContainer>
            <CardList>
                <CardContainer>
                    <PeopleIcon
                        style={{ width: cardImageSize, height: cardImageSize }}
                    />
                    <CardTitle>
                        Les <Primary>passionnés</Primary> de{" "}
                        <Primary>programmation</Primary>
                    </CardTitle>
                </CardContainer>
                <CardContainer>
                    <NewspaperIcon
                        style={{ width: cardImageSize, height: cardImageSize }}
                    />
                    <CardTitle>
                        Les assoiffés de <Primary>connaissance</Primary>
                    </CardTitle>
                </CardContainer>
                <CardContainer>
                    <EarIcon
                        style={{ width: cardImageSize, height: cardImageSize }}
                    />
                    <CardTitle>
                        Les <Primary>curieux</Primary> qui s'ennuie
                    </CardTitle>
                </CardContainer>
            </CardList>
        </CardsContainer>
    </Container>
)

export default () => (
    <Layout page="index">
        <Helmet title="Dylan Do Amaral" defer={false}>
            <meta
                name="description"
                content={
                    "Bonjour je m'appelle Dylan Do Amaral et bienvenue sur mon site personnel dans lequel on va parler programmation orientée data et autres"
                }
            />
        </Helmet>
        <Showcase />
        <Citation />
        <Description />
        <Cards />
    </Layout>
)

//
