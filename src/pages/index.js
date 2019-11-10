import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout/layout"

import { Wrapper, TitleWrapper, Name, Job } from "../styles/index.style"
import Citation from "../components/citation/citation"

const Title = () => (
    <TitleWrapper>
        <Name>Dylan Do amaral</Name>
        <Job>Data engineer</Job>
    </TitleWrapper>
)

export default () => (
    <Layout>
        <Helmet title="Dylan Do Amaral" defer={false} />
        <Wrapper>
            <Title />
            <Citation />
        </Wrapper>
    </Layout>
)
