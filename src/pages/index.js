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
    Picture,
} from "../styles/index.style"
import { H1, Line } from "../styles/global.style"

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
            <Image src={"/owl.png"} alt="owl" />
        </Showcase>
        <Citation />
        <Div>
            <H1 style={{ "textAlign": "center" }}>Pourquoi ce site ?</H1>
            <Line />
            <Content>
                <Picture src={"/forest.jpg"} alt="owl" />
                <div>
                    <Description style={{ "marginBottom": "10px" }}>
                        Il était une fois un petit garçon qui adorait
                        l'informatique et qui voulait partager sa passion et
                        garder une trace de ses différents projets et centre
                        d'attention du moment. Ce petit garçon a alors eu l'idée
                        incroyable de faire son propre site pour partager ce qui
                        l'anime et c'est comme cela que tout a commencé.
                    </Description>
                    <Description>
                        Ce petit garçon tient aussi à vous prévenir, il y a dans
                        cette forêt d'information énormément de constats et de
                        conclusions personnelles qui ne sont pas forcément les
                        meilleurs voir même complétement érronnés dans certain
                        cas.
                    </Description>
                </div>
            </Content>
        </Div>
    </Layout>
)
