import React from "react"
import Layout from "../components/layout/layout"

import { Wrapper, TitleWrapper, Name, Job } from "./index.style"
import Citation from "../components/citation/citation"

const Title = () => (
    <TitleWrapper>
        <Name>Dylan Do amaral</Name>
        <Job>Data engineer</Job>
    </TitleWrapper>
)

export default () => (
    <Layout>
        <Wrapper>
            <Title />
            <Citation />
        </Wrapper>
    </Layout>
)
