import React from "react"

import Layout from "../components/layout/layout"

import { Preface } from "./articles.style"
import { Line } from "../components/global.style"
import ArticleCard from "../components/article_card/article_card"

export default () => (
    <Layout>
        <Preface>
            <h2>Mes articles</h2>
            <p>Dans cette section, j'écris des articles sur des choses qui m'amusent,
                    qui me divertissent toujours en rapport avec ma passion, la programmation.</p>
        </Preface>
        <Line />
        <ArticleCard title="title" description="description" date="02/11/2019"/>
    </Layout>

)
