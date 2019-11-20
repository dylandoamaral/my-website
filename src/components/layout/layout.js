import React from "react"

import PageTransition from "gatsby-plugin-page-transitions"

import Header from "../header/header"
import Footer from "../footer/footer"

import { Layout } from "./layout.style"

export default (props) => (
    <Layout>
        <Header page={props.page}/>
        <PageTransition>{props.children}</PageTransition>
        <Footer />
    </Layout>
)
