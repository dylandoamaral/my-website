import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/global/layout/layout"

import {
    Showcase,
    Name,
    Titles,
    Title,
    Image,
    Div,
    Content,
    Description,
    DescriptionContainer,
    MenCard,
    Men,
    Picture,
} from "../styles/index.style"
import { H1 } from "../styles/global.style"

import Citation from "../components/other/citation/citation"

export default () => (
    <Layout page="index">
        <Helmet title="Dylan Do Amaral" defer={false} />
        <Showcase>
            <Name>Dylan Do Amaral</Name>
            <Titles>
                <Title>Data Engineer</Title>
                <Title secondary={true}>Bricoleur Numérique</Title>
                <Title>Data Magicien</Title>
                <Title secondary={true}>Bloggeur</Title>
            </Titles>
            <Image src={"/index/owl.png"} alt="owl" />
        </Showcase>
        <Citation />
        <Div>
            <H1 style={{ "textAlign": "center", "margin-top": "80px", "marginBottom": "80px" }}>Pourquoi ce site ?</H1>
            <Content>
                <Picture alt="owl" />
                <DescriptionContainer>
                    <Description>
                        Il était une fois un petit garçon qui adorait
                        l'informatique et qui voulait partager sa passion et
                        garder une trace de ses différents projets et centre
                        d'attention du moment. Ce petit garçon a alors eu l'idée
                        incroyable de faire son propre site pour partager ce qui
                        l'anime et c'est comme cela que tout a commencé.
                    </Description>
                </DescriptionContainer>
            </Content>
        </Div>
        <Div>
        <H1 style={{ "textAlign": "center", "margin-top": "80px" }}>Pour qui s'adresse t-il?</H1>
            <Content>
               <MenCard>
                   <Men src={"/index/men/happy.png"} alt="mr.men happy" />
                   <Description>Les passionnés de programmation</Description>
               </MenCard>
               <MenCard>
                   <Men src={"/index/men/curious.png"} alt="mr.men curious" />
                   <Description>Les curieux assoifés de savoir</Description>
               </MenCard>
               <MenCard>
                   <Men src={"/index/men/work.png"} alt="mr.men work" />
                   <Description>Les indécis qui cherchent de l'inspiration</Description>
               </MenCard>
            </Content>
        </Div>
    </Layout>
)

//                 
