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
    ShowcaseContainer,
    ShowcaseName,
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
    CardImage,
    CardTitle,
} from "../styles/index.style"

import PeopleIcon from "../assets/images/icons/people.svg"
import NewspaperIcon from "../assets/images/icons/newspaper.svg"
import EarIcon from "../assets/images/icons/ear.svg"

const Roles = () => (
    <RoleList>
        <Role>Data Engineer</Role>
        <Role>Bricoleur Numérique</Role>
        <Role>Bloggeur</Role>
    </RoleList>
)

const Showcase = () => (
    <ShowcaseContainer>
        <ShowcaseName>Dylan Do Amaral</ShowcaseName>
        <Roles />
        <ShowcaseImage src={"/index/owl.png"} alt="owl" />
    </ShowcaseContainer>
)

const Citation = () => (
    <CitationContainer>
        <CitationContent>
            <CitationTextOne>J'adore</CitationTextOne>
            <CitationTextTwo><Primary>programmer</Primary></CitationTextTwo>
            <CitationBr />
            <CitationTextThree right={"true"}>mais pas</CitationTextThree>
            <CitationTextFour right={"true"}><Secondary>parametrer</Secondary></CitationTextFour>
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

const cardImageSize = '75px';
const Cards = () => (
    <Container>
        <Title>Pour qui s'adresse t-il?</Title>
        <CardsContainer>
            <CardList>
                <CardContainer>
                    <PeopleIcon style={{ width: cardImageSize, height: cardImageSize }}/>
                    <CardTitle>Les <Primary>passionnés</Primary> de <Primary>programmation</Primary></CardTitle>
                </CardContainer>
                <CardContainer>
                    <NewspaperIcon style={{ width: cardImageSize, height: cardImageSize }}/>
                    <CardTitle>Les assoiffés de <Primary>connaissance</Primary></CardTitle>
                </CardContainer>
                <CardContainer>
                    <EarIcon style={{ width: cardImageSize, height: cardImageSize }}/>
                    <CardTitle>Les <Primary>curieux</Primary> qui s'ennuie</CardTitle>
                </CardContainer>
            </CardList>
        </CardsContainer>
    </Container>
)

export default () => (
    <Layout page="index">
        <Helmet title="Dylan Do Amaral" defer={false} />
        <Showcase />
        <Citation />
        <Description />
        <Cards />
    </Layout>
)

//
