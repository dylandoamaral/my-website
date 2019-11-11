import React from "react"

import PageTransition from "gatsby-plugin-page-transitions"

import Header from "../header/header"
import Liseret from "../liseret/liseret"
import Footer from "../footer/footer"

import { Layout } from "./layout.style"

export default ({ children }) => (
    <Layout>
        <Header />
        <Liseret />
        <PageTransition>{children}</PageTransition>
        <Footer />
    </Layout>
)
